import React, { useState, useEffect } from 'react';
import Card from './Card';

const Adoption = () => {
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