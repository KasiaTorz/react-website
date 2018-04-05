import React from 'react';
import Grants from './Grants';

class ListGrants extends React.Component {

    constructor(){
        super();
        this.state ={
            search: 'active'
        };
    }
    upDateSearch(event){
     this.setState({search: event.target.value});
    }
    render() {
        const filterListGrants=
            
        console.log(this.props.grants);
        return (
            <div>
                <ul>
                    {this.props.grants.map((grant)=> {
                        return <Grants grant={grant} key={grant.id}/>
                    })}
                </ul>
                <input type="text"
                       value={this.state.search}
                onChange={this.updateSearch.bind(this)}/>
            </div>
        )
    }
}

export default ListGrants;