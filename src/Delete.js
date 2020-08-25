import React, { Component, useState } from 'react';
import axios from 'axios';

export default class Delete extends Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            persons: [],
            id: ""
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

    handleIdChange = (event) => {
        this.setState({ id: event.target.value });
    };

    handleDeleteSubmit = (event) => {
        event.preventDefault();

        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
            .then((response) => {
                console.log(response);
                console.log(response.data);
            }, (error) => {
                this.setError(error);
            });
    };

    render() {
        return (
            <div>
                <h1>Delete by ID (DELETE)</h1>
                <form onSubmit={this.handleDeleteSubmit}>
                    <label htmlFor="id">Person ID:</label>
                    <input type="text" name="id" onChange={this.handleIdChange}/>
                    <button type="submit">Delete</button>
                </form>
            </div>
        );
    }
}