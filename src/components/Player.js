import React from 'react';
import Matrix from './Matrix';

class Player extends React.Component{
    
    render(){
        var color = ["red","blue","green","purple"]
        var style = {
            backgroundColor:color[this.props.playerNo]
        }
        return (
            <div>
             <p className="title">Player {this.props.playerNo + 1}</p>
              <Matrix playerNo={this.props.playerNo} grid={this.props.grid} playerProgressGrid={this.props.playerProgressGrid}/>
              {console.log("PlayerNO in Player" + this.props.playerNo)}
              <button style = {style} className="btn" id={this.props.playerNo} onClick={() => this.props.handleClaimBtnClick(this.props.playerNo)}>Claim Bingo!</button>
              
            </div>
        )
    }
}
export default Player;