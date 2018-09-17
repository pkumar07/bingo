import React from 'react';

class Cell extends React.Component{
    render(){
        var color = "cyan"
        if(this.props.playerProgressGrid[this.props.row][this.props.col] === 1){
          color = "blue"
        }
        var style = {
            height:30,
            width:30,
            border:"1px solid black",
            backgroundColor:color
          }
          return (
            <div style = {style}>
              {this.props.grid}
            </div>
          )
    }
    
}

export default Cell;

