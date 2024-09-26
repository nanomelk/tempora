import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Función para cerrar el menú al seleccionar una opción
    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="nav">
            <div className="nav-toggle" onClick={toggleMenu}>
                ☰
            </div>
            <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
                <li className="nav-item" onClick={closeMenu}><Link to="/">Home</Link></li>
                <li className="nav-item" onClick={closeMenu}><Link to="/productos">Productos</Link></li>
                <li className="nav-item" onClick={closeMenu}><Link to="/contacto">Contacto</Link></li>
                <li className="nav-item" onClick={closeMenu}><Link to="/cargar-reloj">Cargar Reloj</Link></li>
                <li className="nav-item" onClick={closeMenu}><Link to="/registro">Registro</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
