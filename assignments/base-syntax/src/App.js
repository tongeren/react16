import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    username: 'Duncan'
  }

  usernameChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    const style = {
      backgroundColor: 'yellow',
      font: 'inherit',
      border: '1px solid red',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <UserInput style={style} username = {this.state.username} changed = {this.usernameChangedHandler} />
        <UserOutput username = {this.state.username} />
        <UserOutput />
        <UserOutput />
      </div>
    );
  }
}

export default App;
