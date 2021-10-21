import React from 'react'
import { useLocation } from 'react-router'

const Productos = () => {
    
    const { search } = useLocation();
    let consulta = new URLSearchParams(search);
    let nombre = consulta.get("nombre");
    let edad = consulta.get("edad");

    return (
        <div>
            <h3>Productos</h3>
            <img src="https:placeimg.com/200/200/any" alt="" />
        </div>
    )
}

export default Productos
