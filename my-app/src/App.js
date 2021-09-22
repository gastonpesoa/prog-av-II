import React from 'react';
import './App.css';

const App = () => {
  const titulo = "Carrera Sistemas UTN-FRA";
  const primera = "Tecnico Universitario en Programacion";
  const materias1 = 21;
  const segunda = "Tecnico Universitario en Sistemas Informatico";
  const materias2 = 15;
  const tercera = "Lincenciatura en algo";
  const materias3 = 20;
  
  return (
    <>
      <h1>{titulo}</h1>
      <p>{primera} {materias1}</p>
      <p>{segunda} {materias2}</p>
      <p>{tercera} {materias3}</p>
      <p>Cantidad de materias: {materias1 + materias2 + materias3}</p>
    </>
  );
}

export default App;
