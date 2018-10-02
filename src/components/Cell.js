import React from 'react';
import '../App.css';

class Cell extends React.Component{
    render(){

        var playerColor = "white";
        var playerColorArray = ["red","blue","green","purple","#caccce"]

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

