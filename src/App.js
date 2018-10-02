import React, { Component } from 'react';
import './App.css';
import MyGame from'./components/MyGame';
import { Jumbotron,Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="container"> 
        <Jumbotron>
          <h1>PLAY BINGO!</h1>
          <p>
            <Button bsStyle="primary">Start Game</Button>
          </p>
                     
          <MyGame NO_OF_PLAYERS = {4}/>
        </Jumbotron> 
      </div>
    );
  }
}

export default App;
