import React from 'react';
import '../App.css';
import {Grid, Row, Col,Button, PageHeader} from 'react-bootstrap';

function HeaderCell(props){
    return (
      <div className="header cell" >
        {props.value===-1?"N/A":props.value}
      </div>
    )
  }
  
  function PreviousBalls(props){
    
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={3} md={3}><HeaderCell value={props.prevBalls[0]}/></Col>
            <Col xs={3} md={3}><HeaderCell value={props.prevBalls[1]}/></Col>
            <Col xs={3} md={3}><HeaderCell value={props.prevBalls[2]}/></Col>
            <Col xs={3} md={3}><HeaderCell value={props.prevBalls[3]}/></Col>
          </Row>
        </Grid>
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
              <PageHeader>BINGO</PageHeader>
              <Button disabled ={this.props.winnerPlayerNo === -1 ? false: true} onClick={ () => this.props.handleClick() }>Draw ball!</Button>
              <Grid>
                <Row className="show-grid">
                  <Col xs={12} md={4}> Last Ball: <CurrentBall currentBall={this.props.currentBall}/></Col>
                  <Col xs={12} md={2}></Col>
                  <Col xs={12} md={6}>Previous Balls: <PreviousBalls prevBalls={this.props.prevBalls}/></Col>
                </Row>
              </Grid>   
            </div>
          )
      }
     
    }

    export default Header;
  