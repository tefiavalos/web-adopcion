import React, { useState } from 'react';
import Card from './Card';
import styled from 'styled-components';
import Button from './Button';

// Mismas observaciones al estilado que en Home. 

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
  `



const DivCard = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;

`

const Adoption = ({ gatos }) => {

  // Dado que "sexo" y "age" siempre se usarán juntos, 
  // yo preferiría que fueran propiedades del mismo objeto. 
  // Es decir, algo como
  // const [busqueda, setbusqueda] = useState({
  //   sexo: '',
  //   age: 0
  // })
  // Por otro lado, traten de no usar spanglish en el codigo:
  // o todas las propiedades en ingles, o todas en español. 

  const [sexo, setSexo] = useState('');
  const [age, setAge] = useState(0);
  const [gatosBuscados, setGatosBuscados] = useState(gatos);

  const handleSubmit = (e) => {
    e.preventDefault();

    // traten de hacer estas funciones sin return a menos que sea
    // absolutamente necesario

    // es decir, 
    // let busquedaGatos = gatos.filter(element => element.gender === sexo && element.age === age);
    // Si les molesta porque queda muy larga horizontalmente (a mi tambien me molesta)
    // usen parentesis para retornar en una nueva linea sin tener que escribir return:
    // let busquedaGatos = gatos.filter(element => (
    //   element.gender === sexo && element.age === age
    // );

    let busquedaGatos = gatos.filter(element => {
      return element.gender === sexo && element.age === age;
    });

    setGatosBuscados(busquedaGatos);
  }

  // Tener la busqueda del gato en un solo objeto, como
  // les recomendé más arriba, evitaría tener estas dos funciones tan repetitivas. 
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
        <Button boton="Buscar"/>
      </form>
    </AdoptionStyle>

{/* Privilegien nombres mas descriptivos, como "resultadosBusqueda" a "divcard" 
Por otro lado, el className no es necesario aqui
*/}
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
