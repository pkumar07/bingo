import React, { Component } from 'react';
import Matrix from './Matrix';

function Player(props){
      return (
        <div>
          <Matrix grid={props.grid} />
        </div>
      )
    
  }
  
  
  class Players extends React.Component{
    render(){
        var temp = [];
        for(var i = 0; i<this.props.count; i++){
        temp.push(<Player grid={this.props.grid}/>)
    }
    return(
      <div>
        {temp}
      </div>
      )
    }
    
  }

  export default Players;