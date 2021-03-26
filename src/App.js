import React, { useState, useEffect } from 'react'
import Pokemons from './Pokemons'
import Pokemon from './Pokemon'
import PokeData from './PokeData'


const App = () => {
     const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        const fetchAllPokemons = async () => {
            const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
            const allPokemons = await resp.json();
            const pokemonsDisplayName = allPokemons.results.map(pokemon => pokemon.name,) 
            const pokemonsDisplayUrl = allPokemons.results.map(pokemon => pokemon.url,)
            setPokemons(pokemonsDisplayName)
            console.log(pokemonsDisplayName)
            console.log(pokemonsDisplayUrl)
        }
        fetchAllPokemons()
    }, [])


    return (
        <div className="wrapper">
            <Pokemons pokemons={pokemons}/>
        </div>
    )
}

export default App;
