import React from 'react';
import Matrix from './Matrix';

class Player extends React.Component{
    handleClaimBtnClick(){
        console.log("Claim Button clicked")
        var playerWon = true;
        var displayMessage = ""
        for(var i = 0;i<5;i++){
            for(var j = 0;j<5;j++){
                if(this.props.playerProgressGrid[i][j] === 0){
                    playerWon = false;
                    break;
                }
                    
            }
        }

        if(playerWon === true ){
            displayMessage = "Player Won"
            //TODO: Disable draw Ball button here
            
        }
        else{
            displayMessage = "Incorrect claim"
        }
        
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