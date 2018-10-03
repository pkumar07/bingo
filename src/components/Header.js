import React from 'react';
import '../App.css';
import {Grid, Row, Col,Button} from 'react-bootstrap';

function HeaderCell(props){
    return (
      <div className="header cell" >
        {props.value===-1?"N/A":props.value}
      </div>
    )
  }
  
function PreviousBalls(props){
    var temp = props.prevBalls.map(function(ball,index){
      return <Col key={index} xs={3} md={3}><HeaderCell value={ball < 10 && ball !== -1? "0" + ball : ball}/></Col>
    });

    return (
      <div>
        <Grid> <Row className="show-grid">{temp}</Row></Grid>
      </div>
    )
}

function CurrentBall(props){
    return (
      <div>
        <Grid> 
          <Row className="show-grid">
            <Col xs={12} md={4}><HeaderCell value={props.currentBall < 10 && props.currentBall !== -1? "0" + props.currentBall : props.currentBall} /></Col>
          </Row>
        </Grid>
        
      </div>
    )
}
  
class Header extends React.Component{
      render(){
        return (
            <div>
              <Button disabled ={this.props.winnerPlayerNo === -1 ? false: true} onClick={ () => this.props.handleClick() }>Draw ball!</Button>
              <Grid>
                <Row className="show-grid">
                  <Col xs={12} md={4}> Last Ball: <CurrentBall currentBall={this.props.currentBall}/></Col>
                  <Col xs={12} md={4}></Col>
                  <Col xs={12} md={4}>Previous Balls: <PreviousBalls prevBalls={this.props.prevBalls}/></Col>
                </Row>
              </Grid>   
            </div>
          )
      } 
}

    export default Header;
  