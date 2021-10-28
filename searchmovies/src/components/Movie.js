import React from 'react'
import { Link } from 'react-router-dom';

const Movie = ({ movie }) => {
    const { Title, Year, Poster, imdbID } = movie;
    return (
        <Link to={`peliculas/${imdbID}`} className="card">
            <div className="card-image">
                <figure className="image">
                    <img src={Poster} alt={Title} />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{Title}</p>
                        <p className="subtitle is-6">{Year}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Movie
