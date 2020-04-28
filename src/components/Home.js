import React from 'react';
import img from '../assets/ipa4.jpg';
import styled from 'styled-components';
import Card from './Card';
import imgArticle from '../assets/fondo.jpg';
import { Link } from 'react-router-dom';

const HomePage = styled.section`
display: flex;
background-image: url(${imgArticle});
color: #eee;
font-family: 'Baloo Tamma 2';
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
    font-family: 'Baloo Tamma 2';
    font-weight: 600;
    color: #eee;
}
`
const MainPage = styled.div`
display:flex;
`
const H1 = styled.h1`
color: #eee;
`
const Home = ({ gatitosFiltrados }) => {

    return (
        <>
            <HomePage>
                <img className="img-home" alt="foto de gatito" src={img}></img>
                <article><p>Ipa es una gatita rescatada. Fue rescatada por dos personas que vieron como la tiraban
                desde un auto adentro de una bolsa. Le dieron lugar, la cuidaron, y finalmente fue adoptada
                por una pareja. Hoy el unico recuerdo de ese mal momento es el colmillo que le queda afuera por
            tener la mandibula fracturada.</p></article>
            </HomePage>
            <MainPage>
                {gatitosFiltrados.length !== 0 ? (
                <>
                {gatitosFiltrados.map((gato, index) => {
                    return <Card textoBoton={gato.name} id={gato.id} key={index} imagen={gato.photos[0].medium}/> 
                })}
                <Link to="/adoption">Ver más gatitos</Link>
                </>)  : <H1>Cargando gatitos...</H1>}
                
            </MainPage>
        </>
    )
}

export default Home