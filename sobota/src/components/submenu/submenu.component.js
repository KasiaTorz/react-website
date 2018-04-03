import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './submenu.component';


class Submenucomponent extends Component{
    render(){
        return(
            <div className={this.props.class}>

                <nav>
                    <div><Link to="/about">About</Link></div>
                    <div><Link to="/contact">Contact</Link> </div>
                    <div><Link to="/">Home</Link></div>
                </nav>
            </div>
        );
    }
}
export default Submenucomponent;