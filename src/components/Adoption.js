import React, { useState, useEffect } from 'react';
import Card from './Card';

const Adoption = ({gatos}) => {
  const [sexo, setSexo] = useState('');
  const [age, setAge] = useState(0);
  const [gatosBuscados, setGatosBuscados] = useState(gatos);
  console.log(gatos)
  const handleSubmit = (e) => {
    e.preventDefault();

    let busquedaGatos = gatos.filter(element => {
      return element.gender === sexo && element.age === age;
    });

    setGatosBuscados(busquedaGatos);
  }

  const handleChangeSex = (e) => {
    e.preventDefault();
    setSexo(e.target.value);
  }

  const handleChangeAge = (e) => {
    e.preventDefault();
    setAge(e.target.value);
  }

  return (
    <>
      <h1>Animales disponibles para adoptar cerca tuyo</h1>
      <form onSubmit={handleSubmit}>
        <div className="sexo" onChange={handleChangeSex}>
          <input type="radio" name="sexo" value="Female" />Femenino
          <input type="radio" name="sexo" value="Male" />Masculino
        </div>
        <div className="edad" onChange={handleChangeAge}>
          <input type="radio" name="edad" value="Baby" />Bebe
          <input type="radio" name="edad" value="Adult" />Adulto
        </div>
        <button type="submit">Buscar</button>
      </form>
      {gatosBuscados.length !== 0 ? gatosBuscados.map((gato, index) => {
        return <Card textoBoton={gato.name} key={index} imagen={gato.photos[0].medium} />
      }) : <h1>Busca tu gatito de preferencia</h1>}
    </>
  )
}

export default Adoption;