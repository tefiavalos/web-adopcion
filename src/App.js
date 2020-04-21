import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav.js';
import Adoption from './components/Adoption.js';
import Shop from './components/Shop.js';
import Search from './components/Search.js';
import Home from './components/Home.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {




  return (
    <>
      <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path="/adoption" component={Adoption}></Route>
        <Route path="/shop" component={Shop}></Route>
      </Switch>
      </Router>

      
    </>
  );
}

export default App;
