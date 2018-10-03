import React from 'react';
import '../App.css';

class Cell extends React.Component{
    render(){

        var playerColor = "white";
        var playerColorArray = ["rgba(220, 83, 81, 1)","rgba(105, 203, 217, 1","rgba(187, 225, 123, 1)","rgba(213, 118, 211, 1)","#caccce"]

        if(this.props.playerProgressGrid[this.props.row][this.props.col] === 1)
          playerColor = playerColorArray[4];
        else
          playerColor=playerColorArray[this.props.playerNo]
        
        var style = {backgroundColor:playerColor}
        return (
            <div style = {style} className="cell">{this.props.grid < 10 ? "0" + this.props.grid : this.props.grid}</div>
        )
    }
    
}

export default Cell;

