import React from 'react';
import Player from './Player';

class Players extends React.Component{
   
    render(){
        var temp = [];
        for(var i = 0; i<this.props.count; i++){
        temp.push(<Player key={i} grid={this.props.grid}  playerProgressGrid={this.props.playerProgressGrid}/>)
    }
    return(
      <div>
        {temp}
        
      </div>
      )
    }
    
}

  export default Players;