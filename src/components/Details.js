import React, { useState, useEffect } from 'react';



const Details = (props) => {

    const [gatoSeleccionado, setGatoSeleccionado] = useState({})
    
    useEffect(() => {
        // Armamos el objeto con la información que pide el endpoint de la generación del token. Los datos
        // lo sacamos de la información de la página y Pieri obtuvo la info de client_id  client_
        let data = {
          grant_type: "client_credentials",
          client_id: "ulGkNV7DwLchu4pT5ez9smmhYcGxsgYkxtbA9qWqVPoopzbsPK",
          client_secret: "BhpgVIJenmGKV1VpU2M42Fr88aECxIwK8uRvHLQW"
        }
        // Obtenemos el token necesario para poder llamar a la api y obtener lo gatos.
        fetch(`https://api.petfinder.com/v2/oauth2/token`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*'
          },
          body: JSON.stringify(data),
        })
          .then(res => res.json())
          .then(dataToken => {
            fetch(`https://api.petfinder.com/v2/animals/${props.match.params.id}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Authorization': `Bearer ${dataToken.access_token}`
              },
            })
              .then(res => res.json())
              .then(data => {

                console.log(data.animal)
                setGatoSeleccionado(data.animal);
                
              })
          })
      }, []);

    console.log("en Details")
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

    console.log(props)
    
    return (    
        <>
            <div className="catDetail">
                <h1>{props.name}</h1>
                <hr></hr>
                {/* <span>{props.breeds.primary}</span>
                <span>{props.age} - {props.gender} - {props.size} - {props.colors.join(", ")}</span> */}
            </div>
            <h1>Comunicate con el refugio</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fullName">Nombre y Apellido</label>
                <input name="fullName" id="fullName" onChange={handleChangeFullName} value={fullName}></input>

                <label htmlFor="email">Email</label>
                <input name="email" id="email" onChange={handleChangeEmail} value={email}></input>

                <label htmlFor="phone">Telefono</label>
                <input name="phone" id="phone" onChange={handleChangePhone} value={phone}></input>

                <button type="submit">Enviar</button>
            </form>
        </>
    )
}

export default Details;