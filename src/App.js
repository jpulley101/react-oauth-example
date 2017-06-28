import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  oauthCode = 'thing';

  constructor() {
    super();
    this.saveCode(this.oauthCode);

  }

  saveCode(code) {
    ReactDOM.render(
      <div>{ code }</div>,
      document.getElementById('root')
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <a className="button" target="_blank" href="https://api.planningcenteronline.com/oauth/authorize?client_id=47d35b0a0a8cd42889a3742f89c4971c6da6c60a74511fef6188ebd28f7c5287&redirect_uri=http://localhost:8080/api&response_type=code&scope=people">Authenticate</a>
          <div id="code"></div>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
