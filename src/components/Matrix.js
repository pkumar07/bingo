import React, { Component } from 'react';
import Row from './Row'

class Matrix extends React.Component{
    render(){
        var rows = [];
        for(let i = 4; i >=0 ; i--){
        rows.push(<Row id={i} row={i} rowValues={this.props.grid[i]}/>)
    }
    return (
      <div>
        {rows}
      </div>
        )
    }
    
  }

  export default Matrix;