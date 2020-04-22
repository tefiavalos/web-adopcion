import React from 'react';
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <Link to="/Adoption">Adoption</Link>
            <Link to="/Shop">Shop</Link>
            <Link to="/">Home</Link>

        </nav>
    )

}

export default Nav