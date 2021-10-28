import React, { useState } from 'react'

const SearchForm = ({ onResult }) => {

    const URL = 'http://www.omdbapi.com/'
    const API_KEY = '8b005593'

    const [titulo, setTitulo] = useState("")

    const handleReset = () => {
        setTitulo("")
    }

    const handleChange = (e) => {
        setTitulo(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${URL}?apikey=${API_KEY}&s=${titulo}`)
            .then(res => res.ok ? res.json() : Promise.reject(res.status + ":" + res.statusText))
            .then(data => {
                console.log(data)
                onResult(data.Search || [])
            })
            .catch((error) => {
                console.error(error)
            })
            .finally(() => { handleReset() })
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="field has-addons">
                <div className="control">
                    <input
                        onChange={handleChange}
                        value={titulo}
                        className="input"
                        type="text"
                        placeholder="Find a movie"
                    />
                </div>
                <div className="control">
                    <button className="button is-info">
                        Search
                    </button>
                </div>
            </div>
        </form>
    )
}

export default SearchForm
