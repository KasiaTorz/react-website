import React, { Component } from 'react';



class ListGrants extends Component {
    render() {
        console.log(this.props.grants);
        return (
            <div>
             <ul>
                <li>{this.props.grants.name}Business and Commerce </li>
                 <li>Science and Technology</li>
                 <li>Environmental Quality</li>
                 <li>Food and Nutrition</li>
                 <li>Agriculture</li>
                 <li>Transportation</li>
             </ul>
            </div>
        );
    }
}

export default ListGrants;