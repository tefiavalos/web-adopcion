import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardStyle = styled.div`
font-family: 'Baloo Tamma 2';
font-weight: 600;
color: #eee;
width: 350px;
height: 300px;
border-radius: 15px;
background-color: #555;
display: flex;
justify-content: center; 
padding-top: 15px;
margin-top: 50px;
h1{
    font-family: 'Baloo Tamma 2';
    font-weight: 600;
    color: #eee;
}

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
    padding-bottom: 10px;
    align-items: center;
    justify-content: center;
}
img{
    width: 100%;
    height: auto;
    background-size: cover;
}
p{
    font-size: 15px;
}

:hover{
    font-family: 'Baloo Tamma 2';
    font-weight: 600;
    width: 350px;
    height: 300px;
    border-radius: 15px;
    background-color: #eee;
    display: flex;
    justify-content: center; 
    padding-top: 15px;
    p{
        color: #555;
    }
    @media(max-width:960px){
        width: 49%;
    }
    @media(max-width:768px){
        width: 99%;
    }
}


@media(max-width:960px){
    width: 49%;
}
@media(max-width:768px){
    width: 99%;
}




`

const Card = (props) => {

    return (
        <CardStyle>
            <Link className="link" to={props.link}>
                <div className="imgCard"><img className="center" src={props.imagen} alt=""></img></div>            
                <p>{props.textoBoton}</p>
            </Link>
        </CardStyle>
    )
};

export default Card;