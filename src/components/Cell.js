import React from 'react';
import '../App.css';

class Cell extends React.Component{
    render(){
        var text = this.props.grid < 10 ? "0" + this.props.grid : this.props.grid;
        var playerColorArray = ["rgba(220, 83, 81, 1)","rgba(105, 203, 217, 1","rgba(213, 151, 46, 1)","rgba(213, 118, 211, 1)","#caccce"]
        var playerColor = this.props.playerProgressGrid[this.props.row][this.props.col] === 1 ? playerColorArray[4] :  playerColorArray[this.props.playerNo];     
        var style = {backgroundColor:playerColor}
        return (
            <div style = {style} className="cell">{text}</div>
        )
    }
}

export default Cell;

/* background-color: 
rgba(187, 225, 123, 1) */