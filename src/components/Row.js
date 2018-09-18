import React from 'react';
import Cell from './Cell'

class Row extends React.Component{
    render(){
        var style = {
            display:"flex"
          }
          var cells = []
          for(let i = 0; i<5; i++){
            cells.push(<Cell key = {i} playerNo= {this.props.playerNo} row={this.props.row} col={i} grid={this.props.grid[i]} playerProgressGrid={this.props.playerProgressGrid}/>)
          }
          
          return(
            <div style={style}>
              {cells}
            </div>
          )
    }
    
  }

  export default Row;