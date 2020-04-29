import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import imgArticle from '../assets/fondo.jpg';

const CardStyle= styled.div`
font-family: 'Baloo Tamma 2';
font-weight: 600;
color: #eee;
width: 350px;
height: 300px;
margin: 20px;
border-radius: 15px;
background-color: #5555;
display: flex;
justify-content: center; 
padding-top: 15px;
h1{
    font-family: 'Baloo Tamma 2';
    font-weight: 600;
    color: #eee;
}
margin-top: 50px;
.link{
    text-decoration:none;
    color: #eee;
    font-size: 25px;
}
.imgCard {
    width: 300px;
    height: 200px;
    overflow: hidden;
    border-radius: 15px;
    margin-bottom: 10px;
}
img{
    width: 100%;
    height: auto;
    background-size: cover;
}
`

const Card = (props) => {

    return (
        <CardStyle>
            <Link className="link" to={`/details/${props.id}`}>
                <div className="imgCard"><img src={props.imagen} alt=""></img></div>
                <div>
                    <span>{props.textoBoton}</span>
                </div>
            </Link>
        </CardStyle>
    )
};

export default Card;