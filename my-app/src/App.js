import React from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Total from './components/Total';

const App = ({ facultad }) => {
  const { titulo, carreras } = facultad;
  return (
    <>
      <Header titulo={titulo} />
      <Content carreras={carreras} />
      <Total carreras={carreras} />
    </>
  );
}

export default App;
