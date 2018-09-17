import React from 'react';
import Matrix from './Matrix';

class Player extends React.Component{
    handleClaimBtnClick(){
        console.log("Claim Button clicked")
        var displayMessage = ""
        for(var i = 0;i<this.props.playerProgressGrid.length;i++){
            for(var j = 0;j<this.props.playerProgressGrid[i];j++){
                if(this.props.playerProgressGrid[i][j] === 0){
                    displayMessage = "False claim"
                    break;
                }
                    
            }
        }
        displayMessage = "Player Won"
        alert(displayMessage);
  
    }
    render(){
        return (
            <div>
              <Matrix grid={this.props.grid}  playerProgressGrid={this.props.playerProgressGrid}/>
              <button onClick={() => this.handleClaimBtnClick()}>Claim Bingo!</button>
            </div>
        )
    }
}
export default Player;