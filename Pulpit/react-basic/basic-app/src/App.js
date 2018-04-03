import React, { Component } from 'react';
import './App.css';
import ListGrants from "./ListGrants";
import Grants from './Grants';

let grants = [
    {
    id:1,
    name:"grant",
    type:"governmental",
    location:"nationalwide"
},
    {
      id:2,
      name:"dotation",
      type:"self-government",
      location:"region"


    }];

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
