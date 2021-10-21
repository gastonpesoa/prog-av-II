import React from 'react'
import { useParams } from 'react-router'

const Perfil = () => {
    const { userName, age } = useParams();
    
    return (
        <div>
            <h3>Perfil de {userName}</h3>
            <p>Edad: {age}</p>
        </div>
    )
}

export default Perfil
