import React, { useState } from 'react';
import img from '../assets/ipapate.jpg';
import styled from 'styled-components';


const HomePage = styled.section`
display: flex;
background-color: black;
color: #eee;
font-family: montserrat;
img{
    width: 40%;
    height: auto;
}
article{
    display: flex;
    align-items: center;
    text-align: center;
}
`

const Home = () => {

    return(
        <HomePage>
        <img src={img}></img>
        <article><p>Ipa es una gatita rescatada. Fue rescatada por dos personas que vieron como la tiraban
            desde un auto adentro de una bolsa. Le dieron lugar, la cuidaron, y finalmente fue adoptada
            por una pareja. Hoy el unico recuerdo de ese mal momento es el colmillo que le queda afuera por
            tener la mandibula fracturada.</p></article>
        </HomePage>
    )
}

export default Home