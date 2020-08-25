import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';
import PersonList from './PersonList';
import Delete from './Delete';
import Create from './Create';
import MyRouter from './Router';

function App() {
  return (
    <div className="App">
      <MyRouter/>
    </div>
  );
}

export default App;
