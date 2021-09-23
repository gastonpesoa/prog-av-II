import React from 'react';

const Total = ({ carreras }) => {

    const sum = carreras.reduce((accumulator, a) => {
        return accumulator + a.materias;
    }, 0);

    return <p>Cantidad de materias: {sum}</p>;
}

export default Total;