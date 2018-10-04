import React from 'react';
import '../App.css';
import {Grid, Row, Col} from 'react-bootstrap';

function HeaderCell(props){
    return (
      <div className="header cell center" >
        {props.value===-1?"N/A":props.value}
      </div>
    )
  }
  
function PreviousBalls(props){
    var temp = props.prevBalls.map(function(ball,index){
      return <Col key={index} xs={12} md={3}><HeaderCell value={ball < 10 && ball !== -1? "0" + ball : ball}/></Col>
    });

    return (
      <div className = "center">
        <Grid> <Row className="show-grid">{temp}</Row></Grid>
      </div>
    )
}

function CurrentBall(props){
  var temp =  <Col xs={12} md={4}><HeaderCell value={props.currentBall < 10 && props.currentBall !== -1? "0" + props.currentBall : props.currentBall} /></Col>
    return (
      <div className = "center">
        <Grid><Row className="show-grid">{temp}</Row></Grid>
      </div>
    )
}
  
class Header extends React.Component{
      render(){
        return (
            <div>
              <Grid>
                <Row className="show-grid">
                  <Col xs={12} md={12} lg={4}></Col>
                  <Col xs={12} md={12} lg={1}>Ball: <CurrentBall currentBall={this.props.currentBall}/></Col>
                  <Col xs={12} md={12} lg={3}>Previous Balls: <PreviousBalls prevBalls={this.props.prevBalls}/></Col>
                  <Col xs={12} md={12} lg={3}></Col> 
                </Row>
              </Grid>   
            </div>
          )
      } 
}

    export default Header;
  