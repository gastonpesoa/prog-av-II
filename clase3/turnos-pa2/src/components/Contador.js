import React, { useState } from 'react'

const Contador = ({titulo}) => {

    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador + 1)
    }

    const decrementar = () => {
        setContador(contador - 1)
    }

    return (<>
        <h2>{titulo}</h2>
        <p>{contador}</p>
        <button onClick={decrementar}>-</button>
        <button onClick={incrementar}>+</button>
    </>)
}

Contador.defaultProps = {
    titulo: "titulo por default"
}
export default Contador;