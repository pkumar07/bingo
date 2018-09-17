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
    
    
    isNumberInGrid(currentBall){
      console.log("In isNumberGrid ")
      var returnPos = []
      for(let i = 0; i<this.state.grid.length; i++){
        for(let j = 0; j<this.state.grid[i].length; j++){
          if(currentBall === this.state.grid[i][j]){
            returnPos[0] = i;
            returnPos[1] = j;
            break;
          }
            
        }
      }
      console.log(returnPos.length)
      return returnPos;
    }
    handleClick(){
      console.log("Handle click")
      
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

       //Change state of playerProgressGrid if no is in the player grid
        console.log("Current Ball" + tempCurrentBall)
       //search in the grid
       var returnPos = this.isNumberInGrid(tempCurrentBall)
       if(returnPos.length !== 0){
        var tempGrid = []
        for(let i = 0; i<5; i++){
          tempGrid.push(this.state.playerProgressGrid[i])
        }
        tempGrid[returnPos[0]][returnPos[1]] = 1;
        this.setState({playerProgressGrid:tempGrid})
       } 
       else{
         console.log("No not in grid")
       }
      
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
    
    
    constructor(props){
      super(props)

      var grid = this.generateMatrix()
      var prevBalls = [-1,-1,-1,-1]
      var currentBall = -1
      var allBalls = new Set()
      var playerProgressGrid = []
      for(let i = 0; i<5; i++){
        playerProgressGrid.push(new Array(5).fill(0))
      }
      this.state = {grid:grid, prevBalls:prevBalls, currentBall:currentBall, allBalls:allBalls, playerProgressGrid:playerProgressGrid}
      this.handleClick = this.handleClick.bind(this)
    }
    
    render(){
    
      var temp = []
      for(var i = 0; i<this.props.NO_OF_PLAYERS; i++){
        temp.push(<Player key = {i} grid={this.state.grid} playerProgressGrid={this.state.playerProgressGrid} /> )
      }
      return (
        <div>
          <Header handleClick={this.handleClick} prevBalls={this.state.prevBalls} currentBall={this.state.currentBall}/>
          <div class="flex-container">
            {temp}
          </div>
          
          <Winner />
        </div>
      )
    }
  }
  
export default MyGame;