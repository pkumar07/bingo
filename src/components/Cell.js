import React from 'react';
import '../App.css';

class Cell extends React.Component{
    render(){
        var playerColor = "white"

        if(this.props.playerNo === 0)
          playerColor = "red"
        
        else if(this.props.playerNo === 1)
          playerColor = "blue"

        if(this.props.playerNo === 2)
          playerColor = "green" 

        if(this.props.playerNo === 3)
          playerColor = "purple"

        if(this.props.playerProgressGrid[this.props.row][this.props.col] === 1){
          playerColor = "#caccce"
        }

        
         // console.log("PlayerNO" + this.props.playerNo);
         // console.log("row" + this.props.row + " Col" + this.props.col)
        
        var style = {
            backgroundColor:playerColor
          }
          return (
            <div style = {style} className="cell">
              {this.props.grid}
            </div>
          )
    }
    
}

export default Cell;

