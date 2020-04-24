import React, { useState } from 'react';

const Details = (props) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    console.log(props)
    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Se envió un mail al refugio");
    }

    const handleChangeFullName = (e) => {
        e.preventDefault();
        setFullName(e.target.value);
    }

    const handleChangeEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const handleChangePhone = (e) => {
        e.preventDefault();
        setPhone(e.target.value);
    }

    return (
        <>
            <div className="catDetail">
                <h1>{props.name}</h1>
                <hr></hr>
                <span>{props.breeds.primary}</span>
                <span>{props.age} - {props.gender} - {props.size} - {props.colors.join(", ")}</span>
            </div>
            <h1>Comunicate con el refugio</h1>
            <form onSubmit={handleSubmit}>
                <label for="fullName">Nombre y Apellido</label>
                <input name="fullName" id="fullName" onChange={handleChangeFullName} value={fullName}></input>

                <label for="email">Email</label>
                <input name="email" id="email" onChange={handleChangeEmail} value={email}></input>

                <label for="phone">Telefono</label>
                <input name="phone" id="phone" onChange={handleChangePhone} value={phone}></input>

                <button type="submit">Enviar</button>
            </form>
        </>
    )
}

export default Details;