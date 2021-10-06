import React, { Component } from "react";
import Pokemon from "./Pokemon";

class Lista extends Component {

    state = {
        pokemones: []
    }

    componentDidMount() {
        const URL = "https://pokeapi.co/api/v2/pokemon";
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                //console.log(data.results)
                data.results.forEach(element => {
                    fetch(element.url)
                        .then(res => res.json())
                        .then(pokemon => {
                            //console.log(pokemon)
                            this.setState({
                                pokemones: [
                                    ...this.state.pokemones,
                                    {
                                        id: pokemon.id,
                                        name: pokemon.name,
                                        sprite: pokemon.sprites.front_default
                                    }
                                ]
                            })
                        })
                });
            })
    }

    render() {
        return <>
            {
                this.state.pokemones.map((item) => {
                    return <Pokemon key={item.id} name={item.name} sprite={item.sprite} />
                })
            }
        </>
    }
}

export default Lista;