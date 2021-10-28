import React, { useState } from 'react'
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import MoviesList from '../components/MoviesList';

const Home = () => {
    const [result, setResult] = useState([])
  const [flag, setFlag] = useState(false)

  const renderResults = () => {
    return (
        result.length ? (
         <MoviesList movies={result}/>
        ) : (
          <li>No hay resultados</li>
        )
    )
  }

  const handleResult = (result) => {
    setResult(result)
    setFlag(true)
  }

  return (
    <div className="App">
      <Header>Buscador de peliculas</Header>
      <div className="form-wrapper">
        <SearchForm onResult={handleResult} />
      </div>
      {
        flag ? renderResults() : (
          <p>Ingrese un titulo a buscar</p>
        )
      }
    </div >
  );
}

export default Home
