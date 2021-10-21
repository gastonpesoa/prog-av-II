import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navegacion = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/acerca">Acerca</Link>
                <Link to="/productos">Productos</Link>
                <Link to="/contacto">Contacto</Link>
                <Link to="/servicios">Servicios</Link>
                <Link to="/listado">Listado</Link>
                <Link to="/perfil/juan/30">Perfil de Juan</Link>
                <Link to="/perfil/lucia/24">Perfil de Lucia</Link>
            </nav>
            <nav>
                <NavLink exact to="/">Home</NavLink>
                <NavLink exact activeClassName="activeClass" to="/acerca">Acerca</NavLink>
                <NavLink exact to="/productos">Productos</NavLink>
                <NavLink exact to="/contacto">Contacto</NavLink>
            </nav>
        </div>
    )
}

export default Navegacion
