import React, { useState, useEffect } from 'react'
import Pokemons from './Pokemons'
import Pokemon from './Pokemon'
import PokeData from './PokeData'

const App = () => {
    const [pokemons, setPokemons] = useState([])
    const [pokemon, setPokemon] = useState({})
    const [view, setView] = useState('')
    
    useEffect(() => {
        const fetchAllPokemons = async () => {
            const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
            const allPokemons = await resp.json();
            
            setPokemons(allPokemons.results)
          
        }
        fetchAllPokemons()
    }, [])
  

    switch (view) {
        case 'pokeData':
            return (
                <div className="wrapper">
                     <PokeData setView={setView} pokemon={pokemon} setPokemons={setPokemons}/>
                </div>
            )
        default:
            return (
                <div className="wrapper">
                    <Pokemons setView={setView} pokemons={pokemons} setPokemon={setPokemon} setPokemons={setPokemons}/>
                </div>
            )
    }
}

export default App;
