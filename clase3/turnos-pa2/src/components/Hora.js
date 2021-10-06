import React, { useEffect } from 'react'

const Hora = ({hora}) => {

    useEffect(()=>{
        return () => {
            console.log("Hora desmontada")
        }
    }, []) // el metodo se va ejecutar cuando se desmonte el componente

    return (<>
        <h2>{hora}</h2>
    </>)
}

export default Hora;