import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav.js';
import Adoption from './components/Adoption.js';
import Home from './components/Home.js'
import Details from './components/Details'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/footer';

function App() {
  const [gatitosFiltrados, setGatitosFiltrados] = useState([]);
  const [gatos, setGatos] = useState([]);

  useEffect(() => {
    let data = {
      grant_type: "client_credentials",
      client_id: "ulGkNV7DwLchu4pT5ez9smmhYcGxsgYkxtbA9qWqVPoopzbsPK",
      client_secret: "BhpgVIJenmGKV1VpU2M42Fr88aECxIwK8uRvHLQW"
    }
    fetch(`https://api.petfinder.com/v2/oauth2/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(dataToken => {
        fetch(`https://api.petfinder.com/v2/animals?type=cat&status=adoptable&limit=100`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
            'Authorization': `Bearer ${dataToken.access_token}`
          },
        })
          .then(res => res.json())
          .then(data => {
            let tresAnimales = [];
            let animalesConFoto = data.animals.filter(element => {
              return element.photos.length !== 0;
            });
            for (let i = 0; i < 3; i++) {
              tresAnimales[i] = animalesConFoto[i];
            }

            setGatos(animalesConFoto);
            setGatitosFiltrados(tresAnimales);
          })
      })
  }, []);

  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={() => <Home gatitosFiltrados={gatitosFiltrados} />}></Route>
          <Route exact path="/adoption" component={() => <Adoption gatos={gatos} />}></Route>
          <Route exact path="/details/:id" component={Details}></Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;