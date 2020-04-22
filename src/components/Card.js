import React from 'react';

const Card = (props) => {
    console.log(props.imagen);
    return (
        <div>
            <a href="/">
                <img src={props.imagen} alt=""></img>
                <div>
                    <span>{props.textoBoton}</span>
                </div>
            </a>
        </div>
    )
};

export default Card;