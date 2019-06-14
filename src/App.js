import React from 'react';
import './App.css';
import Routes from './router/'
import {Link} from 'react-router-dom'

function App() {
  return (
      <div className="App">
        <Routes />
        <Link to="/list">list</Link>
      </div>
  );
}

export default App;
