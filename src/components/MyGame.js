import React from 'react';
import Header from './Header';
import Player from './Player';
import '../App.css';
import { Grid, Row, Col, Jumbotron, Button} from 'react-bootstrap';


function Winner(props){
    return (
      <div>
        <h3>Player {props.winnerPlayerNo + 1} is the winner!!</h3>
      </div>
    )
  }  
  
class MyGame extends React.Component{

    generateMatrix(){
      var tempMatrix = new Set();
      while(tempMatrix.size !== 25){
        tempMatrix.add(Math.floor((Math.random() * 100) + 1))
      }
      
      tempMatrix = Array.from(tempMatrix)
      var grid =[]; //2D
      for(var i = 0; i<5; i++){
        grid.push(tempMatrix.splice(0,5))     
      }
        
      return grid;
    }

    isNumberInGrid(currentBall, playerNo){
      var grid = this.state.grid[playerNo]
      var returnPos = []
      for(let i = 0; i<grid.length; i++){
        for(let j = 0; j<grid[i].length; j++){
          if(currentBall === grid[i][j]){
            returnPos[0] = i;
            returnPos[1] = j;
            break;
          }  
        }
      }
      return returnPos;
    }

    setGridValues(tempCurrentBall,playerNo){
      var returnPos = this.isNumberInGrid(tempCurrentBall,playerNo)
      var ppgrid = this.state.playerProgressGrid[playerNo]
      var tempGrid = []
      for(let i = 0; i<5; i++){
          tempGrid.push(ppgrid[i])
      }
      if(returnPos.length !== 0){
        tempGrid[returnPos[0]][returnPos[1]] = 1;
       } 
       else{
         //console.log("No not in grid")
       }
       return tempGrid; //This is the modified playerProgressGrid for a player
    }

    generateNewBall(){
       //Random generated ball should be unique
       do{
        var tempCurrentBall = Math.floor((Math.random() * 100) + 1);
      }while(this.state.allBalls.has(tempCurrentBall) && this.state.allBalls.size < 100)
      
      var tempAllBalls = new Set(this.state.allBalls)
      tempAllBalls.add(tempCurrentBall)
      
      if(this.state.currentBall !== -1){
        var tempPrevBalls = []
        for(let i = 0; i<3; i++){
          tempPrevBalls[i+1] = this.state.prevBalls[i];
        }
        tempPrevBalls[0] = this.state.currentBall;
        this.setState({prevBalls:tempPrevBalls})  
      }
       this.setState({currentBall:tempCurrentBall, allBalls:tempAllBalls})
       return tempCurrentBall;
    }


    handleClaimBtnClick(id){
      var playerWon = true;
      var grid = this.state.playerProgressGrid[id]
      for(var i = 0;i<5;i++){
          for(var j = 0;j<5;j++){
              if(grid[i][j] === 0){
                  playerWon = false;
                  break;
              }  
          }
      }

      if(playerWon === true ){
          this.setState({winnerPlayerNo:id})
      }
      else{
          alert("Incorrect claim")
      }

  }

    handleClick(){
      var tempCurrentBall = this.generateNewBall()
       //Change state of playerProgressGrid if no is in the player grid
       //search in the grid for each player and update the grid for each player
       var tempGrid = []
       for(var playerNo = 0; playerNo<this.props.NO_OF_PLAYERS; playerNo++){
          tempGrid.push(this.setGridValues(tempCurrentBall,playerNo));
       } 
       this.setState({playerProgressGrid:tempGrid}) 
    }
    
    handleResetClick(){
      window.location.reload();
    }

    handleStartGameClick(){
      var temp = true;
      this.setState({gameStarted:temp});
    }

    constructor(props){
      
      super(props)
      var grid = []
      for(var i = 0; i<this.props.NO_OF_PLAYERS; i++){
        grid[i] = this.generateMatrix()
      }
      var prevBalls = [-1,-1,-1,-1]
      var currentBall = -1
      var allBalls = new Set()
      var winnerPlayerNo = -1
      var gameStarted = false;
      var playerProgressGrid = []
      for(let i = 0; i<this.props.NO_OF_PLAYERS; i++){
        playerProgressGrid[i] = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
      }

      this.state = {grid:grid, prevBalls:prevBalls, currentBall:currentBall, allBalls:allBalls, playerProgressGrid:playerProgressGrid, winnerPlayerNo:winnerPlayerNo, gameStarted:gameStarted}
      this.handleClick = this.handleClick.bind(this)
      this.handleClaimBtnClick = this.handleClaimBtnClick.bind(this)
    }
    
    render(){
    
      var temp = []
      for(var i = 0; i<this.props.NO_OF_PLAYERS; i++){
        temp.push(
          <Col key={i} xs={12} md={6} lg={3}>
            <Player key = {i} playerNo = {i} grid={this.state.grid[i]} playerProgressGrid={this.state.playerProgressGrid[i]} winnerPlayerNo={this.state.winnerPlayerNo} handleClaimBtnClick={this.handleClaimBtnClick} /> 
          </Col>
        )
      }

      let mybutton;
      if(this.state.gameStarted === true && this.state.winnerPlayerNo === -1)
            mybutton = <Col key={2.1} xs={6} md={3} lg={2}><div className={this.state.gameStarted && this.state.winnerPlayerNo === -1  ? '' : 'hidden'}><Button bsStyle="primary" disabled ={this.state.winnerPlayerNo === -1 ? false: true} onClick={ () => this.handleClick() }>Draw ball!</Button></div></Col>;

      else if(this.state.gameStarted === false || this.state.winnerPlayerNo > -1)
            mybutton = <Col key={2.2} xs={6} md={3} lg={2}><div className={this.state.gameStarted && this.state.winnerPlayerNo === -1 ? 'hidden' : ''}><Button bsStyle="primary" onClick={ () => this.handleStartGameClick()}>Start Game</Button></div></Col>
      
      return (
        <div className="container">

           <Jumbotron>
             <Grid>
               <Row>
               <Col key={1} xs={12} md={6} lg={8}><h1>PLAY BINGO!</h1></Col>
               {mybutton}              
               <Col key={3} xs={6} md={3} lg={2}><div><Button bsStyle="primary" onClick={ () => this.handleResetClick()}>Reset Game</Button></div></Col>
  
               </Row>
              </Grid>
              
              <div className={this.state.gameStarted && this.state.winnerPlayerNo === -1  ? '' : 'hidden'}>
                <Header prevBalls={this.state.prevBalls} currentBall={this.state.currentBall}/>
                <Grid><Row className="show-grid">{temp} </Row></Grid>
              </div>
              <div className={this.state.winnerPlayerNo !== -1 ? '' : 'hidden'}><Winner winnerPlayerNo={this.state.winnerPlayerNo} /></div>
           </Jumbotron>
        </div>
      )
    }
  }
  
export default MyGame;