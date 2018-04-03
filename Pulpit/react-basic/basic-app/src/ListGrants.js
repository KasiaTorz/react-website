import React, { Component } from 'react';
import Grants from './Grants';


class ListGrants extends Component {
    render() {
        console.log(this.props.grants);
        return (
            <div>
             <ul>
                 {this.props.grants.map((grant)=>{
                   return  <Grants/>
                 })}

             </ul>
            </div>
        )
    }
}

export default ListGrants;