import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';

const MoviePage = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState({})
    const { Title, Poster, Year, Actors, Plot } = movie;

    useEffect(() => {
        const URL = 'http://www.omdbapi.com/'
        const API_KEY = '8b005593'
        fetch(`${URL}?apikey=${API_KEY}&i=${id}`)
            .then(res => res.ok ? res.json() : Promise.reject(res.status + ":" + res.statusText))
            .then(data => {
                console.log(data)
                setMovie(data)
            })
            .catch((error) => {
                console.error(error)
            })
        //.finally(() => { handleReset() })
    }, [id])

    return (
        <div>
            <Link to="/">Volver</Link>
            <h1>{Title}</h1>
            <img src={Poster} alt={Title}/>
            <p>{Year}</p>
            <p>{Plot}</p>
            <p>{Actors}</p>
        </div>
    )
}

export default MoviePage
