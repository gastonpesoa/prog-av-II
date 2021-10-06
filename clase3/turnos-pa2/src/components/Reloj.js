import React, { useEffect, useState } from 'react'
import Hora from './Hora';

const Reloj = () => {

    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    const [intervalo, setIntervalo] = useState(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        console.log("Constructor")
    }, []) // se ejecuta solo una vez cuando tiene el array vacio

    useEffect(() => {
        console.log("Hora modificado")
    }, [hora]) // se ejecuta cada vez que se modifica el estado hora

    const iniciar = () => {
        console.log("Iniciar")
        setIntervalo(setInterval(() => {
            setHora(new Date().toLocaleTimeString())
        }, 1000))
        setVisible(true)
    }
    
    const detener = () => {
        console.log("Detener")
        clearInterval(intervalo)
        setVisible(false)
    }

    return (<>
        <h2>Reloj</h2>
        {visible && <Hora hora={hora} />}
        <nav>
            <button onClick={iniciar}>Iniciar</button>
            <button onClick={detener}>Detener</button>
        </nav>
    </>)
}

export default Reloj;