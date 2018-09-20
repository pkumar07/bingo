import React from 'react';
import '../App.css';

class Cell extends React.Component{
    render(){
        var playerColor = "cyan"

        if(this.props.playerNo === 0)
          playerColor = "red"
        
        else if(this.props.playerNo === 1)
          playerColor = "blue"

        if(this.props.playerNo === 2)
          playerColor = "green" 

        if(this.props.playerNo === 3)
          playerColor = "yellow"

        if(this.props.playerProgressGrid[this.props.row][this.props.col] === 1){
          playerColor = "cyan"
        }

        
          console.log("PlayerNO" + this.props.playerNo);
          console.log("row" + this.props.row + " Col" + this.props.col)
        
        var style = {
            height:30,
            width:30,
            border:"1px solid black",
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

