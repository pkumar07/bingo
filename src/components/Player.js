import React from 'react';
import Matrix from './Matrix';

class Player extends React.Component{
    render(){
        return (
            <div>
              <Matrix playerNo={this.props.playerNo} grid={this.props.grid} playerProgressGrid={this.props.playerProgressGrid}/>
              {console.log("PlayerNO in Player" + this.props.playerNo)}
              <button id={this.props.playerNo} onClick={() => this.props.handleClaimBtnClick(this.props.playerNo)}>Claim Bingo!</button>
            </div>
        )
    }
}
export default Player;