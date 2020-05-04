import React from 'react';
import { Link } from 'react-router-dom'
import img from '../assets/gatitonegro.png';
import styled from 'styled-components';

const NavSection = styled.nav`
display: flex;
justify-content: space-around;
width: 100%;
padding: 2% 0;
background-image: url(${img});
font-family: 'Baloo Tamma 2';
font-weight: 600;
box-shadow: -webkit-box-shadow: inset -2px -1px 46px -13px rgba(71,66,66,1);
-moz-box-shadow: inset -2px -1px 46px -13px rgba(71,66,66,1);
box-shadow: inset -2px -1px 46px -13px rgba(71,66,66,1);
    .link{
        text-decoration:none;
        color: #eee;
        font-size: 13px;
}
    .logo{
        text-decoration:none;
        color: #eee;
        font-size: 20px;
        font-weight: 700;
        padding-right: 45%
    }


    @media(max-width:768px){
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 10px 0;
        margin: 0;
        .link{
            font-size: 10px;
            margin: 0;
            padding: 0;
        }
        .logo{
            font-size: 12px;
            padding: 0;
            margin: 0;
        }
    }
`


const Nav = () => {
    return (
        <NavSection>
            <Link className="logo" to="/">IpaLoca</Link>
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/adoption">Adoption</Link>
        </NavSection>
    )

}

export default Nav