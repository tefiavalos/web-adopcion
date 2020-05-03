import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from './Button';

// Mismas observaciones que en el estilado de Home. 
const DIV = styled.div`
color: white;
font-family: 'Baloo Tamma 2';
margin-left: 10px;
display: flex;
flex-direction: column;
align-items: center;
.catDetail{
  width: 50%
}
.imagen{
width: auto;
height: auto;
}
form{
  display:flex;
  flex-direction: column;
  button{
    margin: 10px;
  }
}
`

const Details = (props) => {

  // De la misma manera que les comente en Adoption, 
  // yo aqui usaria un objeto con la propiedad fullName e email, 
  // en lugar de dos variables distintas. 
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [gatoSeleccionado, setGatoSeleccionado] = useState(null);

  useEffect(() => {

    // La primera parte de este useEffect es igual a la de la Home. 
    // Piensen como podrian hacer para no tener que repetirlo
    // (Por ejemplo, poniendo la variable "data" en un archivo aparte, e importarlo)

    // Armamos el objeto con la información que pide el endpoint de la generación del token. Los datos
    // lo sacamos de la información de la página y Pieri obtuvo la info de client_id  client_
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
        fetch(`https://api.petfinder.com/v2/animals/${props.match.params.id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
            'Authorization': `Bearer ${dataToken.access_token}`
          },
        })
          .then(res => res.json())
          .then(data => {
            // recuerden nunca dejar console.log en un trabajo entregado
            console.log("TEST")
            console.log(data)
            setGatoSeleccionado(data.animal);
          })
      })
  }, [props.match.params.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Si mandamos el form vacio esto rompe
    alert(`Hola ${fullName[0].toUpperCase()+fullName.slice(1)} ya mandamos un mail a ${email} con más información sobre ${gatoSeleccionado.name}`);
  }

  const handleChangeFullName = (e) => {
    e.preventDefault();
    setFullName(e.target.value);
  }

  const handleChangeEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  }

  // ಠ_ಠ
console.log(gatoSeleccionado)

// Este componente esta algo desprolijo: yo le agregaria dos sub-componentes
// Uno para la tarjeta del gato (que deberia ser un section o article, no un div)
// y otro para el formulario. 
  return (
    <DIV>
    {/* {!gatoSeleccionado ?  seria mejor */}
      {gatoSeleccionado != null ?
        <div className="catDetail">
          <h1>{gatoSeleccionado.name}</h1>
          <hr></hr>
          <img className="imagen" alt="foto de gatito" src={gatoSeleccionado.photos[0].medium}></img>
          <hr></hr>
          <p>{gatoSeleccionado.breeds.primary}</p>
          <p> Edad: {gatoSeleccionado.age} </p>
          <p> Sexo: {gatoSeleccionado.gender} </p> 
          <p> Tamaño: {gatoSeleccionado.size} </p>
          <p> Colores: {(gatoSeleccionado.colors.primary != null ? gatoSeleccionado.colors.primary : "Información no disponible") + " - " +
(gatoSeleccionado.colors.secondary != null ? gatoSeleccionado.colors.secondary : "")} </p>
          <p>{gatoSeleccionado.description}</p>
        </div>
        : <h1>Obteniendo información del gatito...</h1>}
      <h1>Comunicate con el refugio</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Nombre</label>
        <input name="fullName" id="fullName" onChange={handleChangeFullName} value={fullName}></input>

        <label htmlFor="email">Email</label>
        <input name="email" id="email" onChange={handleChangeEmail} value={email}></input>
        <Button boton="Enviar"/>
      </form>

    </DIV>

  )
}

export default Details;
