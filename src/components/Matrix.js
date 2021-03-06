import React from 'react';
import Row from './Row'

class Matrix extends React.Component{
    render(){
        var rows = [];
        for(let i = 4; i >=0 ; i--){  
          rows.push(<Row key={i} row={i} playerNo={this.props.playerNo} grid={this.props.grid[i]}  playerProgressGrid={this.props.playerProgressGrid}/>)
        }
    return (
        <div className = "center">{rows}</div>
      )
    }
    
  }

  export default Matrix;