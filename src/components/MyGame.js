import React, { Component } from 'react';
import Header from './Header';
import Players from './Players'

function Winner(){
    return (
      <div>
        <h3>Player is the winner</h3>
      </div>
    )
  }
  
  
  
class MyGame extends React.Component{
    
    
    handleClick(){
      console.log("Handle click")
      
      //Random generated ball should be unique
      do{
        var tempCurrentBall = Math.floor((Math.random() * 100) + 1);
      }while(this.state.allBalls.has(tempCurrentBall))
      
      var tempAllBalls = new Set(this.state.allBalls)
      tempAllBalls.add(tempCurrentBall)
      
      if(this.state.currentBall != -1){
        var tempPrevBalls = []
        for(let i = 0; i<3; i++){
          tempPrevBalls[i+1] = this.state.prevBalls[i];
        }
        tempPrevBalls[0] = this.state.currentBall;
        this.setState({prevBalls:tempPrevBalls})  
      }
       this.setState({currentBall:tempCurrentBall, allBalls:tempAllBalls})
      
    }
    
    generateMatrix(){
      var tempMatrix = new Set();
      while(tempMatrix.size != 25){
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
      this.state = {grid:grid, prevBalls:prevBalls, currentBall:currentBall, allBalls:allBalls}
      this.handleClick = this.handleClick.bind(this)
    }
    
    render(){
      return (
        <div>
          <Header handleClick={this.handleClick} prevBalls={this.state.prevBalls} currentBall={this.state.currentBall}/>
          <Players count={1} grid={this.state.grid}/>
          <Winner />
        </div>
      )
    }
  }
  
export default MyGame;