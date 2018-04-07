import React from 'react';
import Grants from './Grants';

class ListGrants extends React.Component {

    constructor(){
        super();
        this.state ={
            search: ''
        };
    }
    upDateSearch(event){
     this.setState({search: event.target.value});
    }
    render() {
        const filterListGrants= this.props.grants.filter(
            (grant) =>{
                return grant.name.toLowerCase().indexOf(this.state.search) !== -1;
            }
        );

        return (
            <div>
                <input type="text"
                       value={this.state.search}
                       onChange={this.updateSearch.bind(this)}/>
                <ul>
                    {filterListGrants.map((grant)=> {
                        return <Grants grant={grant} key={grant.id}/>
                    })}
                </ul>
            </div>
        )
    }
}

export default ListGrants;