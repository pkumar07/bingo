import React from 'react';
import '../App.css';


function HeaderCell(props){
    return (
      <div className="header cell" >
        {props.value===-1?"N/A":props.value}
      </div>
    )
  }
  
  function PreviousBalls(props){
    
    return (
      <div className="flex-container">
        <HeaderCell value={props.prevBalls[0]}/>
        <HeaderCell value={props.prevBalls[1]}/>
        <HeaderCell value={props.prevBalls[2]}/>
        <HeaderCell value={props.prevBalls[3]}/>
      </div>
    )
  }
  
  function CurrentBall(props){
    return (
      <div>
        <HeaderCell value={props.currentBall} />
      </div>
    )
  }
  
  class Header extends React.Component{
      render(){
        return (
            <div className="header flex-container">
              <div className="header flex-container"><button className="header btn" onClick={ () => this.props.handleClick() }>Draw ball!</button></div>
              <div className="header flex-container">
                <div>Last Ball: <CurrentBall currentBall={this.props.currentBall}/></div>
                <div>Previous Balls: <PreviousBalls prevBalls={this.props.prevBalls}/></div>
                
              </div>
              
            </div>
          )
      }
     
    }

    export default Header;
  