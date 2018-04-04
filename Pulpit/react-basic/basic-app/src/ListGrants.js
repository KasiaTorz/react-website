import React from 'react';



class ListGrants extends React.Component {
    render() {
        console.log(this.props.grants);
        return <div>
            <ul>
                {this.props.grants.map((grant) => {
                    return <Grants grant={grant} key={ grant.id}/>
                })}

            </ul>
        </div>
    }
}

export default ListGrants;