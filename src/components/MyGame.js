import React from 'react';
import Header from './Header';
import Player from './Player';
import '../App.css';

function Winner(){
    return (
      <div>
        <h3>Player is the winner</h3>
      </div>
    )
  }
  
  
  
class MyGame extends React.Component{

    displayMatrix(grid, playerNo){
      console.log("Player " + playerNo)
      console.log(grid)
    }
    
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
      console.log("In isNumberGrid ")
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
      console.log("Player " + playerNo + "has current no? " + returnPos.length)
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
        //No in grid
        tempGrid[returnPos[0]][returnPos[1]] = 1;
       } 
       else{
         console.log("No not in grid")
       }
       this.displayMatrix(tempGrid, playerNo);
       
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

    handleClick(){
       //console.log("Handle click")
       var tempCurrentBall = this.generateNewBall()
       //Change state of playerProgressGrid if no is in the player grid
       console.log("Current Ball" + tempCurrentBall)
       //search in the grid for each player and update the grid for each player
       var tempGrid = []
       for(var playerNo = 0; playerNo<this.props.NO_OF_PLAYERS; playerNo++){
          tempGrid.push(this.setGridValues(tempCurrentBall,playerNo));
       } 
       this.setState({playerProgressGrid:tempGrid}) 
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

      var playerProgressGrid = []
      for(let i = 0; i<this.props.NO_OF_PLAYERS; i++){
        playerProgressGrid[i] = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
      }

     // console.log("Initial playerProgressGridCheck");
      //console.log(playerProgressGrid[0])
      
      this.state = {grid:grid, prevBalls:prevBalls, currentBall:currentBall, allBalls:allBalls, playerProgressGrid:playerProgressGrid}
      this.handleClick = this.handleClick.bind(this)
    }
    
    render(){
    
      var temp = []
      for(var i = 0; i<this.props.NO_OF_PLAYERS; i++){
        temp.push(<Player key = {i} playerNo = {i} grid={this.state.grid[i]} playerProgressGrid={this.state.playerProgressGrid[i]} /> )
      }
      return (
        <div>
          <Header handleClick={this.handleClick} prevBalls={this.state.prevBalls} currentBall={this.state.currentBall}/>
          <div className="flex-container">
            {temp}
          </div>
          
          <Winner />
        </div>
      )
    }
  }
  
export default MyGame;