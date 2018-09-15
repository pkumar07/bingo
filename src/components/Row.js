import React, { Component } from 'react';
import Cell from './Cell'

class Row extends React.Component{
    render(){
        var style = {
            display:"flex"
          }
          var cells = []
          for(let i = 0; i<5; i++){
            cells.push(<Cell row={this.props.row} col={i} cellValue={this.props.rowValues[i]}/>)
          }
          
          return(
            <div style={style}>
              {cells}
            </div>
          )
    }
    
  }

  export default Row;