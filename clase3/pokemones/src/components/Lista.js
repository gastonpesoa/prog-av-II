import React, { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

const Lista = () => {

    const [pokemones, setPokemones] = useState([]);

    useEffect(() => {

        const URL = "https://pokeapi.co/api/v2/pokemon";

        const getPokemones = async (url) => {

            try {
                const res = await fetch(url);
                if (!res.ok) throw new Error(res.status)
                const data = await res.json();
                data.results.forEach(async (element) => {
                    const res = await fetch(element.url)
                    if (!res.ok) throw new Error(res.status)
                    const pokemon = await res.json()
                    setPokemones((pokemones) => {
                        return [
                            ...pokemones,
                            {
                                id: pokemon.id,
                                name: pokemon.name,
                                sprite: pokemon.sprites.front_default
                            }
                        ]
                    })
                });
            } catch (error) {
                console.log(error.message);
            }

        }

        getPokemones(URL);

    }, [])

    return (<>
        {
            pokemones.map((item) => {
                return <Pokemon key={item.id} name={item.name} sprite={item.sprite} />
            })
        }
    </>)
}

// class Lista extends Component {

//     state = {
//         pokemones: []
//     }

//     componentDidMount() {
//         const URL = "https://pokeapi.co/api/v2/pokemon";
//         fetch(URL)
//             .then(res => res.json())
//             .then(data => {
//                 //console.log(data.results)
//                 data.results.forEach(element => {
//                     fetch(element.url)
//                         .then(res => res.json())
//                         .then(pokemon => {
//                             //console.log(pokemon)
//                             this.setState({
//                                 pokemones: [
//                                     ...this.state.pokemones,
//                                     {
//                                         id: pokemon.id,
//                                         name: pokemon.name,
//                                         sprite: pokemon.sprites.front_default
//                                     }
//                                 ]
//                             })
//                         })
//                 });
//             })
//     }

//     render() {
//         return <>
//             {
//                 this.state.pokemones.map((item) => {
//                     return <Pokemon key={item.id} name={item.name} sprite={item.sprite} />
//                 })
//             }
//         </>
//     }
// }

export default Lista;