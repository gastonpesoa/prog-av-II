import React from 'react'
import Movie from './Movie'

const MoviesList = ({ movies }) => {

    return (
        <section className="movies-list">
            {
                movies.map((movie) => {
                    return <div key={movie.imdbID} className="movies-list-item">
                        <Movie movie={movie} />
                    </div>
                })
            }
        </section>
    )
}

export default MoviesList
