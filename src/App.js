import React, { Component } from 'react';
import './App.css';
import MyGame from './components/MyGame';


class App extends Component {
  render() {
    return (
      <div> 
       <MyGame NO_OF_PLAYERS = {4}/>
      </div>
    );
  }
}

export default App;
