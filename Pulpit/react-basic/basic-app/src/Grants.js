import React from 'react';



class Grants extends React.Component {
    render() {
        console.log(this.props.grants);
        return (
            <div>
                <li>
                    {this.props.grants.name}{this.props.grants.type}
                </li>
            </div>
        )
    }
}

export default Grants;