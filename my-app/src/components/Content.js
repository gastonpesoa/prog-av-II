import React from 'react';
import Carreras from './Carreras';

const Content = ({ carreras }) => {
    
    return (
        <>
            {
                carreras.map((element, i) => {
                    return <Carreras
                        key={i}
                        nombre={element.nombre}
                        materias={element.materias}
                    />
                })
            }
        </>
    );
}

export default Content;