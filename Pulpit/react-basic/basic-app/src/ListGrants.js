import React from 'react';
import  Grants from './Grants';


class ListGrants extends React.Component {
    render() {
        console.log(this.props.grants);
        return (
            <div>
                <ul>
                    {this.props.grants.map((grant) => {
                        return <Grants grant={grant} key={ grant.id}/>
                    })}
                </ul>
            <input type="text" value= {this.state.search}/>
            </div>
        )
    }
}

export default ListGrants;