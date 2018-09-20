import React from 'react';
import '../App.css';


var style = {
             backgroundColor:"white",
            }

function HeaderCell(props){
    var style = {
      height:20,
      width:20,
      border:"1px solid black",
      backgroundColor:"yellow",
      borderRadius:"100px",
      fontSize: "15px"
    }
    return (
      <div className="cell" style = {style}>
        {props.value===-1?"N/A":props.value}
      </div>
    )
  }
  
  function PreviousBalls(props){
    
    return (
      <div style={style} className="flex-container">
        <HeaderCell value={props.prevBalls[0]}/>
        <HeaderCell value={props.prevBalls[1]}/>
        <HeaderCell value={props.prevBalls[2]}/>
        <HeaderCell value={props.prevBalls[3]}/>
      </div>
    )
  }
  
  function CurrentBall(props){
    return (
      <div style={style} className="flex-container">
        <HeaderCell value={props.currentBall} />
      </div>
    )
  }
  
  class Header extends React.Component{
      render(){
        return (
            <div >
              <div className="flex-container" ><button onClick={ () => this.props.handleClick() }>Draw ball!</button></div>
              <div className="header flex-container">
                <div>Last Ball: <CurrentBall currentBall={this.props.currentBall}/></div>
                <div>Previous Balls: <PreviousBalls prevBalls={this.props.prevBalls}/></div>
                
              </div>
              
            </div>
          )
      }
     
    }

    export default Header;
  