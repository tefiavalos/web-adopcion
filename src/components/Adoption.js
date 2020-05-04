import React, { useState } from 'react';
import Card from './Card';
import styled from 'styled-components';
import Button from './Button';

const AdoptionStyle = styled.section`
display:flex;
flex-direction: column;
color: #eee;
font-family: 'Baloo Tamma 2';
align-items: center;
form{
  display: flex;
  flex-direction: column;
  input{
    margin: 20px;
  }
}


`

const H1 = styled.h1`
  color: #eee;
  font-family: 'Baloo Tamma 2';
  display:flex;
flex-direction: column;
color: #eee;
font-family: 'Baloo Tamma 2';
align-items: center;

@media(max-width:960px){
  h1{
  text-align: center;
  }
}
  `



const DivCard = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;

`

const Adoption = ({ gatos }) => {
  const [sexo, setSexo] = useState('');
  const [age, setAge] = useState(0);
  const [gatosBuscados, setGatosBuscados] = useState(gatos);

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
    <AdoptionStyle>
      <H1>Animales disponibles para adoptar cerca tuyo</H1>
      <form onSubmit={handleSubmit}>
        <div className="sexo" onChange={handleChangeSex}>
          <input type="radio" name="sexo" value="Female" />Femenino
          <input type="radio" name="sexo" value="Male" />Masculino
        </div>
        <div className="edad" onChange={handleChangeAge}>
          <input type="radio" name="edad" value="Baby" />Bebe
          <input type="radio" name="edad" value="Adult" />Adulto
        </div>
        <Button boton="Buscar"/>
      </form>
    </AdoptionStyle>

<DivCard className="divcard">
      {gatosBuscados.length !== 0 ? gatosBuscados.map((gato, index) => {
        return (
          <Card
            textoBoton={gato.name}
            infoGato={gato}
            key={index}
            imagen={gato.photos[0].large}
            link={`/details/${gato.id}`}
          />
        )
        
      }) : <H1>Busca tu gatito de preferencia...</H1>}
  </DivCard>

</>)
}

export default Adoption;