import React from 'react';
import { Link } from 'react-router-dom'
import img from '../assets/gatitonegro.png';
import styled from 'styled-components';
import imgfooter from '../assets/github.png';

const FooterStyled = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
flex-wrap: wrap;
padding: 2% 0;
background-color: black;
font-family: 'Baloo Tamma 2';
font-weight: 700;
margin-top: 20px;
box-shadow: -webkit-box-shadow: inset -2px -1px 46px -13px rgba(71,66,66,1);
-moz-box-shadow: inset -2px -1px 46px -13px rgba(71,66,66,1);
box-shadow: inset -2px -1px 46px -13px rgba(71,66,66,1);
img{
    width: 50px;
    height: 50px;
}
.link{
    padding-top: 10px;
    text-decoration:none;
    color: #eee;
    font-size: 13px;
}
`

const Footer = () => {
    return (
        <>
        <FooterStyled>
            <img src={imgfooter}></img>
            <a className="link" target="_blank" href="https://github.com/tefiavalos">Tefi Avalos</a>
            <a className="link" target="_blank" href="https://github.com/nsdonato">Noe Donato</a>
            <a className="link" target="_blank" href="https://github.com/pierifrancia">Pieri Francia</a>
        </FooterStyled>
        </>
    )

}

export default Footer