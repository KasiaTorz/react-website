import React from 'react';



class Grants extends React.Component {
    render() {
        console.log(this.props.grant);
        return (
            <div>
                <li>
                    {this.props.grant.name}{this.props.grant.type}
                </li>
            </div>
        )
    }
}

export default Grants;