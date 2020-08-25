import React, { Component, useState } from 'react';
import axios from 'axios';

export default class PersonList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            persons: []
        };
    }

    setError = (e) => {
        this.setState({ error: e });
    };

    setIsLoaded = (bool) => {
        this.setState({ isLoaded: bool });
    };

    setPersons = (personList) => {
        this.setState({ persons: personList });
    };

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => response)
            .then((result) => {
                this.setIsLoaded(true);
                this.setPersons(result.data)
            }, (error) => {
                // Errors not handles in catch() block so exceptions from buggy
                // components are not swallowed
                this.setIsLoaded(true);
                this.setError(error);
            });
    }

    render() {
        return (
            <div>
                <h1>People (GET)</h1>
                <ul>
                    {this.state.persons.map(person => <li>{person.name}</li>)}
                </ul>
            </div>
        );
    }
}