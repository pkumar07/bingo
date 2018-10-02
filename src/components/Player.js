import React from 'react';
import Matrix from './Matrix';
import {PageHeader, Button} from 'react-bootstrap';

class Player extends React.Component{
    
    render(){
        var color = ["red","blue","green","purple"]
        var style = {backgroundColor:color[this.props.playerNo]}
        return (
            <div>
             <PageHeader><small>Player {this.props.playerNo + 1}</small></PageHeader>
             <Matrix playerNo={this.props.playerNo} grid={this.props.grid} playerProgressGrid={this.props.playerProgressGrid}/>
             <Button style = {style} bsStyle="primary" disabled={this.props.winnerPlayerNo === -1 ? false : true} className="btn" id={this.props.playerNo} onClick={() => this.props.handleClaimBtnClick(this.props.playerNo)}>Claim Bingo!</Button>  
            </div>
        )
    }
}
export default Player;