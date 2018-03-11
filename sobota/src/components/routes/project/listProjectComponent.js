import React, { Component } from 'react';



class ListProjectComponent extends Component {

    render() {

        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.Team}>
                        {item.Team} {item.Team_name}
                    </li>
                ))}
            </ul>
        )
    }
}

export default ListProjectComponent;