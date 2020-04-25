import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Details from './Details'

const Card = (props) => {
    return (
        <div>
            <Link to='/details/1'>
                <img src={props.imagen} alt=""></img>
                <div>
                    <span>{props.textoBoton}</span>
                </div>
            </Link>

        </div>
    )
};

export default Card;