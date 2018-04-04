import React  from 'react';
import './App.css';
import ListGrants from './ListGrants';


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

class App extends React.Component {
  render() {
    return (
      <div>
          <h1 >List of grants</h1>
          <ListGrants grants ={this.props.grants}/>
      </div>
    )
  }
}

React.render (<App grants={grants}/>, document.getElementById('app'));
export default App;
