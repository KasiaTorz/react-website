import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './footer.component.css'


class Footer extends Component {
    static propTypes={
        name:PropTypes.string,
    };
    static defaultProps={
        versionApp:"Wersja 2"
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <div>
                    <p> {this.props.date}</p>
                    <p> {this.props.name}</p>
                    <p> {this.props.versionApp}</p>
                </div>
            </div>
        );
    }
}

export default Footer;