import React, { useState, useEffect } from 'react'
import Pokemons from './Pokemons'
import Pokemon from './Pokemon'
import PokeData from './PokeData'


const App = () => {
    const [pokemons, setPokemons] = useState([])
    const [pokemon, setPokemon] = useState()
    const [url, setUrl] = useState([])
    //const [pokeData, setPokeData] = useState([])
    const [view, setView] = useState('')
    useEffect(() => {
        const fetchAllPokemons = async () => {
            const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
            const allPokemons = await resp.json();
            const pokemonsDisplayName = allPokemons.results.map(pokemon => pokemon.name )
            const pokemonsDisplayUrl = allPokemons.results.map(pokemon => pokemon.url)
            setPokemons(pokemonsDisplayName)
            setUrl(pokemonsDisplayUrl)
            //setUrl(pokemonsDisplayUrl)
            //setPokemons(pokemonsDisplayUrl)
            //console.log(allPokemons.results)
            //console.log(pokemonsDisplayUrl)
        }
        fetchAllPokemons()
    }, [])
  

    switch (view) {
        case 'pokeData':
            return (
                <div className="wrapper">
                     <PokeData setView={setView} pokeUrl={pokemon.url}/>
                </div>
            )
        default:
            return (
                <div className="wrapper">
                    <Pokemons setView={setView} pokemons={pokemons} url={url} />
                </div>
            )
    }
}

export default App;
