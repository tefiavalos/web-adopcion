import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const DIV = styled.div`
color: white;
`

const Details = (props) => {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gatoSeleccionado, setGatoSeleccionado] = useState(null)

  useEffect(() => {

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
            console.log("TEST")
            console.log(data)
            setGatoSeleccionado(data.animal);
          })
      })
  }, [props.match.params.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Se envió un mail al refugio");
  }

  const handleChangeFullName = (e) => {
    e.preventDefault();
    setFullName(e.target.value);
  }

  const handleChangeEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  }

  const handleChangePhone = (e) => {
    e.preventDefault();
    setPhone(e.target.value);
  }
console.log(gatoSeleccionado)
  return (
    <DIV>
      {gatoSeleccionado != null ?
        <div className="catDetail">
          <h1>{gatoSeleccionado.name}</h1>
          <hr></hr>
          <img className="" alt="foto de gatito" src={gatoSeleccionado.photos[0].small}></img>
          <hr></hr>
          <span>{gatoSeleccionado.breeds.primary}</span>
          <span>{gatoSeleccionado.age + " - " + gatoSeleccionado.gender + " - " + gatoSeleccionado.size + " - " + gatoSeleccionado.colors.primary } </span>
        </div>
        : <h1>Obteniendo información del gatito</h1>}
      <h1>Comunicate con el refugio</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Nombre y Apellido</label>
        <input name="fullName" id="fullName" onChange={handleChangeFullName} value={fullName}></input>

        <label htmlFor="email">Email</label>
        <input name="email" id="email" onChange={handleChangeEmail} value={email}></input>

        <label htmlFor="phone">Telefono</label>
        <input name="phone" id="phone" onChange={handleChangePhone} value={phone}></input>

        <button type="submit">Enviar</button>
      </form>

    </DIV>

  )
}

export default Details;