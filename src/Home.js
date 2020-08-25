import React from 'react';
import PersonList from './PersonList';
import Delete from './Delete';
import Create from './Create';

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <PersonList/>
                <Delete/>
                <Create/>
            </div>
        )
    }
}