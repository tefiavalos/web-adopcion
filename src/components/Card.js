import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import imgArticle from '../assets/fondo.jpg';

const CardStyle= styled.section`
font-family: 'Baloo Tamma 2';
font-weight: 600;
background-image: url(${imgArticle});
color: #eee;
width: 300px;
h1{
    font-family: 'Baloo Tamma 2';
    font-weight: 600;
    color: #eee;
}
margin-top: 50px;
.link{
    text-decoration:none;
    color: #eee;
}
img{
    width: 100%;
}
`

const Card = (props) => {

    return (
        <CardStyle>
            <Link className="link" to={`/details/${props.id}`}>
                <img src={props.imagen} alt=""></img>
                <div>
                    <span>{props.textoBoton}</span>
                </div>
            </Link>
        </CardStyle>
    )
};

export default Card;