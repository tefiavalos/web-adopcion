import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <div>
            <Link
                to={{
                    pathname: `/details`,
                    query: { sexo: 'Female', age: '1' }
                }}>
                <img src={props.imagen} alt=""></img>
                <div>
                    <span>{props.textoBoton}</span>
                </div>
            </Link>
        </div>
    )
};

export default Card;