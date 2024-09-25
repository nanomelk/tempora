// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="nav">
            <ul className="nav-list">
                <li className="nav-item"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="/productos">Productos</Link></li>
                <li className="nav-item"><Link to="/contacto">Contacto</Link></li>
                <li className="nav-item"><Link to="/cargar-reloj">Cargar Reloj</Link></li>
                <li className="nav-item"><Link to="/registro">Registro</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
