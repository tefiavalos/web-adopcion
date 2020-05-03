import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav.js';
import Adoption from './components/Adoption.js';
// Es recomendable poner el punto y coma al final de cada sentencia import. 
import Home from './components/Home.js'
import Details from './components/Details'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// privilegien escribir todas las funciones, incluida App, como arrow functions
// es decir, const App = () => {
function App() {
  const [gatitosFiltrados, setGatitosFiltrados] = useState([]);
  const [gatos, setGatos] = useState([]);

  // Esto lo comentamos porque al final vamos a hacer esta parte de la adopción de otra manera, pero lo vamos a ne
  useEffect(() => {
    // Armamos el objeto con la información que pide el endpoint de la generación del token. Los datos
    // lo sacamos de la información de la página y Pieri obtuvo la info de client_id  client_

    //Esto no debería estar subido a github ni a now, porque ambos códigos son públicos. 
    // En github, pueden poner un placeholder aca, 
    // y en now, pueden configurar un archivo para usar variables de entorno. 
    let data = {
      grant_type: "client_credentials",
      client_id: "ulGkNV7DwLchu4pT5ez9smmhYcGxsgYkxtbA9qWqVPoopzbsPK",
      client_secret: "BhpgVIJenmGKV1VpU2M42Fr88aECxIwK8uRvHLQW"
    }
    // Obtenemos el token necesario para poder llamar a la api y obtener lo gatos.
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
            // Filtramos para quedarnos solo con los que tengan fotos. Porque vimos que los primeros 20 no tenían.
            
            // podriamos hacer esta funcion mas breve asi:
            // let animalesConFoto = data.animals.filter(element => element.photos.length);

            let animalesConFoto = data.animals.filter(element => {
              return element.photos.length !== 0;
            });
            // Filtramos 3 gatitos para mostrar algo. Esto + lo de arriba después podríamos mejorarlo con un reduce
            
            // Privilegien usar forEach antes que for, y push en lugar de asignación directa. 
            
            // Esto no es algo que hayamos visto, pero lo comento. 
            // Este 3 aca es lo que llamamos un "magic number" (y a pesar de su nombre, no es
            // algo bueno). Cuando necesitamos números de manera arbitraria en nuestro código, 
            // es buena idea ponerlos en una constante en lugar de dejarlos sueltos. 
            // Eso evita confusiones a futuro. 
            // Por ejemplo 
            // const numbersOfCardsToDisplay = 3;
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
        {/* 
          Cuando los componentes no tienen contenido, prefieran cerrarlos en la misma etiqueta de 
          apertura. Es decir, aqui escribir:
          <Route exact path="/" component={() => <Home gatitosFiltrados={gatitosFiltrados} />}/> 
        */}
          <Route exact path="/" component={() => <Home gatitosFiltrados={gatitosFiltrados} />}></Route>
          <Route exact path="/adoption" component={() => <Adoption gatos={gatos} />}></Route>
          <Route exact path="/details/:id" component={Details}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
