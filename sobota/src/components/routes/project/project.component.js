import React, { Component } from 'react';
import './project.component.css';
import ListProjectComponent from './listProjectComponent';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentWillMount() {
        fetch('http://nflarrest.com/api/v1/team')
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('result');
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                    console.log(this.state);
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ListProjectComponent items={items}/>

            );
        }
    }
}

export default Project;
