import React, { Component } from 'react';
import Grants from './Grants';


class Grants extends Component {
    render() {
        console.log(this.props.grants);
        return (
            <div>
                <li>
                    {this.props.grant.name}{this.props.grant.type}
                </li>
            </div>
        );
    }
}

export default Grants;