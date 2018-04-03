import React, { Component } from 'react';
import './App.css';
import ListGrants from "./ListGrants";

let grants = {
    name:"grant",
    type:"governmental",
    location:"region"
};

class App extends Component {
  render() {
    return (
      <div>
          <h1 >List of grants</h1>
          <ListGrants grants ={this.props.grants}/>

      </div>
    );
  }
}

export default App;
