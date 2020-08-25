import React, { Component, useState } from 'react';
import axios from 'axios';

export default class Create extends Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            persons: [],
            name: ""
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

    handleChange = (event) => {
        this.setState({ name: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const user = {
            name: this.state.name
        };

        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
            .then((response) => {
                console.log(response);
                console.log(response.data);
            });
    };

    render() {
        return (
            <div>
                <h1>Submit a Person (POST)</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Person Name:</label>
                    <input type="text" name="name" onChange={this.handleChange} />
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}