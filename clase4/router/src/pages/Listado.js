import React from 'react'
import { useHistory, useLocation } from 'react-router'

const LIMITS = 10;

const Listado = () => {

    const { push } = useHistory();
    const { search, pathname } = useLocation();
    let consulta = new URLSearchParams(search);
    let inicio = parseInt(consulta.get("inicio"));
    let fin = parseInt(consulta.get("fin"));

    const handlerPrev = (e) => {
        if(inicio>1){
            push(pathname + `?inicio=${inicio - LIMITS}&fin=${fin - LIMITS}`)
        }
    }

    const handlerNext = (e) => {
        push(pathname + `?inicio=${inicio + LIMITS}&fin=${fin + LIMITS}`)
    }

    return (
        <div>
            <h3>Listado</h3>
            <p>Lista del producto {inicio} al {fin}</p>
            <button onClick={handlerPrev}>Anterior</button>
            <button onClick={handlerNext}>Siguiente</button>
        </div>
    )
}

export default Listado
