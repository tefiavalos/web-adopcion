import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  text-decoration: none;
  font-family: 'Baloo Tamma 2';
  padding: 5px;
  font-weight: 600;
  font-size: 15px;
  margin-left: 10px;
  color: #eee;
  background-color: #4D4D4D;
  border-radius: 6px;
  border: 2px solid #4D4D4D;
:hover{
  color: #4D4D4D;
  background-color: #eee;

}
`

const Button = props =>{
    return(
    <ButtonStyled className="boton" type="submit">{props.boton}</ButtonStyled>
    )
}

export default Button