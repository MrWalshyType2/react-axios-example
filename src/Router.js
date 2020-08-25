import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Footer from './Footer';

// function Home() {
//     return <h1>Home Page</h1>
// }

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>

                {/* Switch looks through its children <Route>s,
                    then render first matching the current url */}
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                </Switch>
                <Route exact path="*" component={Footer}/>
            </div>
        </BrowserRouter>
    )
}