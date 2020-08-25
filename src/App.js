import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';
import PersonList from './PersonList';
import Delete from './Delete';
import Create from './Create';

function App() {
  return (
    <div className="App">
      <PersonList/>
      <Delete/>
      <Create/>
    </div>
  );
}

export default App;
