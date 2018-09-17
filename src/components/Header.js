import React from 'react';

function HeaderCell(props){
    var style = {
      height:40,
      width:40,
      border:"1px solid black",
      backgroundColor:"yellow"
    }
    return (
      <div style = {style}>
        {props.value===-1?"N/A":props.value}
      </div>
    )
  }
  
  function PreviousBalls(props){
    return (
      <div>
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
            <div>
              <button onClick={ () => this.props.handleClick() }>Draw ball!</button>
              <CurrentBall currentBall={this.props.currentBall}/>
              <PreviousBalls prevBalls={this.props.prevBalls}/>
            </div>
          )
      }
     
    }

    export default Header;
  