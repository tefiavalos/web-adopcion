import React, { useState } from 'react';
import Card from './Card';
import styled from 'styled-components';

const AdoptionStyle = styled.section`
display:flex;
flex-direction: column;
color: #eee;
font-family: 'Baloo Tamma 2';
align-items: center;
form{
  input{
    margin: 20px;
  }
}
`

const ButtonStyled = styled.button`
  text-decoration: none;
  font-family: 'Baloo Tamma 2';
  padding: 5px 10px;
  font-weight: 600;
  font-size: 15px;
  color: #eee;
  background-color: #4D4D4D;
  border-radius: 6px;
  border: 2px solid #4D4D4D;
}
:hover{
  color: #4D4D4D;
  background-color: #eee;
  
}
`

const DivCard = styled.div`
display: flex;
flex-direction: row;
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
    <AdoptionStyle>
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
        <ButtonStyled clasName="boton" type="submit">Buscar</ButtonStyled>
      </form>
      {gatosBuscados.length !== 0 ? gatosBuscados.map((gato, index) => {
        return (
          <DivCard className="divcard">
          <Card
            textoBoton={gato.name}
            infoGato={gato}
            key={index}
            imagen={gato.photos[0].medium}
          />
          </DivCard>
        )
      }) : <h1>Busca tu gatito de preferencia</h1>}
      
    </AdoptionStyle>
  )
}

export default Adoption;