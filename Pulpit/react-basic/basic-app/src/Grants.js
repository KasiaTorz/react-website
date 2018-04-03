import React, { Component } from 'react';



class Grants extends Component {
    render() {
        console.log(this.props.grants);
        return (
            <div>
                <ul>
                    <li>{this.props.grant.name}{this.props.grant.type}</li>
                </ul>
            </div>
        );
    }
}

export default Grants;