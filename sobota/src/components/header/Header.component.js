import React, { Component } from 'react';
import logo from '../../logo.svg';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './header.component.css';
import Submenucomponent from '../submenu/submenu.component';


class Header extends Component {
    static propTypes={
        title:PropTypes.string
    };





    state= {menueVisability:false};
    toggleMenu=()=>{
        this.setState({
            menueVisability:!this.state.menueVisability,
        })
    };

    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <button onClick= {()=>this.toggleMenu()}>Menu</button>

                    <submenucomponent class={'active'}/>

                    {this.state.menueVisability ? <Submenucomponent/> : ''}
                    <h1 className="App-title">{this.props.title}</h1>
                </header>

                <p className="App-intro">

                </p>
            </div>
        );
    }
}

export default Header;