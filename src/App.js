import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from '..components/Login.js';
import Home from './compoments/Home.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
    </Router>
  );
}

export default App;
