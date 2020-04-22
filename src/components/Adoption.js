import React, { useState, useEffect } from 'react';
import Card from './Card';

const Adoption = () => {
  const [gatos, setGatos] = useState([]);
  // Esto lo comentamos porque al final vamos a hacer esta parte de la adopción de otra manera, pero lo vamos a necesitar.

  // useEffect(() => {
  //   // Armamos el objeto con la información que pide el endpoint de la generación del token. Los datos
  //   // lo sacamos de la información de la página y Pieri obtuvo la info de client_id  client_
  //   let data = {
  //     grant_type: "client_credentials",
  //     client_id: "ulGkNV7DwLchu4pT5ez9smmhYcGxsgYkxtbA9qWqVPoopzbsPK",
  //     client_secret: "BhpgVIJenmGKV1VpU2M42Fr88aECxIwK8uRvHLQW"
  //   }
  //   // Obtenemos el token necesario para poder llamar a la api y obtener lo gatos.
  //   fetch(`https://api.petfinder.com/v2/oauth2/token`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': '*/*'
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then(res => res.json())
  //     .then(dataToken => {
  //       fetch(`https://api.petfinder.com/v2/animals?type=cat&status=adoptable&limit=100`, {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'Accept': '*/*',
  //           'Authorization': `Bearer ${dataToken.access_token}`
  //         },
  //       })
  //         .then(res => res.json())
  //         .then(data => {
  //           let tresAnimales = [];
  //           // Filtramos para quedarnos solo con los que tengan fotos. Porque vimos que los primeros 20 no tenían.
  //           let animalesConFoto = data.animals.filter(element => {
  //               return element.photos.length !== 0;
  //           });
  //           // Filtramos 3 gatitos para mostrar algo. Esto + lo de arriba después podríamos mejorarlo con un reduce
  //           for (let i = 0; i < 3; i++) {
  //             tresAnimales[i] = animalesConFoto[i];
  //           }
  //           //console.log(tresAnimales);
  //           setGatos(tresAnimales);
  //         })
  //     })
  // }, []);

  return (
    <>
      <h1>Animales disponibles para adoptar cerca tuyo</h1>
      <form>
        <div class="sexo">
          <input type="radio" name="sexo" value="female" />Femenino
          <input type="radio" name="sexo" value="male" />Masculino
        </div>
        <div class="edad">
          <input type="radio" name="edad" value="baby" />Bebe
          <input type="radio" name="edad" value="senior" />Adulto
        </div>
        <button type="submit">Buscar</button>
      </form>
      {gatos.length !== 0 ? gatos.map((gato, index) => {
        return <Card textoBoton={gato.name} key={index} imagen={gato.photos[0].medium} />
      }) : <h1>Busca tu gatito de preferencia</h1>}
    </>
  )
}

export default Adoption;