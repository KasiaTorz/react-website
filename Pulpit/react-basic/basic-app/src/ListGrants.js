import React from 'react';
import Grants from './Grants';

class ListGrants extends React.Component {

    constructor(){
        super(props);
        this.state ={
            search: '',
            grants:props.grants
        };
    }
    upDateSearch(event){
     this.setState({search: event.target.value});
    }

    addGrants(event){
        event.preventDefault();

        let name= this.refs.name.value;
        let type= this.refs.type.value;
        let location= this.refs.location.value;
        console.log()
        this.setState({
            grants:this.state.grants.push({name,type,location})
        })
    }
    render() {
        const filterListGrants= this.state.props.grants.filter(
            (grant) =>{
                return grant.name.toLowerCase().indexOf(this.state.search) !== -1;
            }
        );

        return (
            <div>
                <input type="text"
                       placeholder="search"
                       value={this.state.search}
                       onChange={this.upDateSearch.bind(this)}/>
                <form onSubmit={this.addGrants.bind(this)}>
                    <input type= "text" ref="name"/>
                    <input type= "text" ref="type"/>
                    <input type= "text" ref="when"/>
                    <input type= "text" ref="where"/>
                    <button type="submit">Search Offer of Grants</button>
                </form>


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