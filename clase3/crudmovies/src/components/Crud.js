import React, { useEffect, useState } from 'react'
import Form from './Form'
import Loader from './Loader'
import Table from './Table'


const Crud = () => {

    const [movies, setMovies] = useState([])
    const [movieEdit, setMovieEdit] = useState(null)
    const [loading, setloading] = useState(false)


    useEffect(() => {
        const URL = "http://localhost:5000/movies";
        const getMovies = async (url) => {
            setloading(true);
            try {
                const res = await fetch(url);
                const data = await res.json();
                data.forEach((movie) => {
                    setMovies((movies) => {
                        return [...movies, movie]
                    })
                })
                setloading(false);
            } catch (error) {

            }
        }
        getMovies(URL)
    }, [])

    const createMovie = (newMovie) => {
        //console.log(newMovie)
        newMovie.id = Date.now();
        setMovies(movies => [...movies, newMovie])
        alert("Alta Okey!")
    }

    const updateMovie = (movieUpdated) => {
        //console.log(movieUpdated)
        setMovies((movies) => {
            return movies.map((movie) =>
                movie.id === movieUpdated.id ? movieUpdated : movie
            )
        })
        alert("Modificacion Okey!")
    }

    const deleteMovie = (id) => {
        if (window.confirm("Confirma eliminacion de " + id)) {
            setMovies((movies) => {
                return movies.filter(movie => movie.id !== id)
            })
            alert("Eliminado Okey!")
        }
    }

    return (
        <section>
            <Form
                createMovie={createMovie}
                updateMovie={updateMovie}
                setMovieEdit={setMovieEdit}
                movieEdit={movieEdit}
            />
            {
                loading
                    ? (<Loader />)
                    : (<Table
                        data={movies}
                        setMovieEdit={setMovieEdit}
                        deleteMovie={deleteMovie}
                    />)
            }
        </section>
    )
}

export default Crud
