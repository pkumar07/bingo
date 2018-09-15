import React, { Component } from 'react';

class Cell extends React.Component{
    render(){
        var style = {
            height:30,
            width:30,
            border:"1px solid black",
            backgroundColor:"cyan"
          }
          return (
            <div style = {style}>
              {this.props.cellValue}
            </div>
          )
    }
    
}

export default Cell;

