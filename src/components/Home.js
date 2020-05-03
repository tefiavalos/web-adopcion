import React from 'react';
import img from '../assets/ipa4.jpg';
import styled from 'styled-components';
import Card from './Card';
import imgArticle from '../assets/fondo.jpg';
// Siempre cerrar los import con un ;
import Huella from '../assets/huella.png'
// Este Link no se esta usando, es preferible borrarlo. 
import { Link } from 'react-router-dom';

// El estilado esta bastante desprolijo, consideren usar un linter como
// Prettier para mejorarlo. Los estilos deben tener un tabulado (es decir, no
// estar al mismo nivel que cada const) y deben seguir un estilo consistente con
// el espaciado (o todos los : van con un espacio despues, o ninguno, al igual que los {)

// "HomePage" y "MainPage": no queda claro por qué esos nombres, o en qué se diferencian. 
const HomePage = styled.section`
display: flex;
background-image: url(${imgArticle});
color: #eee;
font-family: 'Baloo Tamma 2';
padding-bottom: 30px;
imgArticle{
    width:50%;
}
article{
    display: flex;
    align-items: center;
    text-align: center;
    padding: 5%;
}
h1{
    /* font family es innecesario aqui, ya que se hereda de HomePage */
    font-family: 'Baloo Tamma 2';
    font-weight: 600;
    color: #eee;
}
`

const MainPage = styled.div`
display:flex;
justify-content: space-around;
flex-wrap: wrap;
font-family: 'Baloo Tamma 2';
.linkVerMas {
        background-color: #555;
        text-decoration:none;
        width: 150px;
        height: 20px;
        border-radius: 5px;
        padding: 5px;
        text-align: center;
        color: #fff;
}
`
const H1 = styled.h1`
color: #eee;
`
const Home = ({ gatitosFiltrados }) => {

    return (
        <>
            <HomePage>
            {/* Por semántica, la etiqueta img debería ir dentro de article */}
                <img className="img-home" alt="foto de gatito" src={img}></img>
                <article><p>Ipa es una gatita rescatada. Fue rescatada por dos personas que vieron como la tiraban
                desde un auto adentro de una bolsa. Le dieron lugar, la cuidaron, y finalmente fue adoptada
                por una pareja. Hoy el unico recuerdo de ese mal momento es el colmillo que le queda afuera por
                tener la mandibula fracturada. Ella quiere que todos los gatitos tengan la misma oportunidad que ella.
                Te invitamos a ver los gatitos adoptables.</p></article>
            </HomePage>
            <hr></hr>
            <MainPage>
            {/* !gatitosFiltrados.length seria mejor */}
                {gatitosFiltrados.length !== 0 ? (
                    <>
                        {gatitosFiltrados.map((gato, index) => {
                            return <Card textoBoton={gato.name} key={index} imagen={gato.photos[0].full} link={`/details/${gato.id}`}/>
                        })}
                        {/* <Link className="linkVerMas" to="/adoption">Ver más gatitos</Link> */}
                        <Card className="linkVerMas" textoBoton={'Ver mas gatitos...'} imagen={Huella}  link={`/adoption`} />
                    </>) : <H1>Cargando gatitos...</H1>}
            </MainPage>
        </>
    )
}

// El ternario del JSX esta bien desde la logica, pero muy confuso de leer 
// por la manera de organizar el codigo.
// Yo haria algo asi:

// {gatitosFiltrados.length !== 0 
// ? (
// <>
// {gatitosFiltrados.map((gato, index) => (
//     <Card
//       textoBoton={gato.name}
//       key={index}
//       imagen={gato.photos[0].full}
//       link={`/details/${gato.id}`}
//     />
//   );
// )}
// <Card
//   className="linkVerMas"
//   textoBoton={'Ver mas gatitos...'}
//   imagen={Huella}
//   link={`/adoption`}
// />
// </>
// ) : (
// <H1>Cargando gatitos...</H1>
// )}

export default Home
