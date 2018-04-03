import React, { Component } from 'react';

import './App.css';
import ListGrants from "./ListGrants";

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">List of grants</h1>
          <ListGrants/>

      </div>
    );
  }
}

export default App;
