import React, { useEffect, useState } from 'react'
import Pokemon from './Pokemon'

const PokeData = (props) => {
    const [pokemon, setPokemon] = useState({})
    useEffect(() => {
        const fetchPokeData = async () => {
            const resp = await fetch(props.pokemon.url)
            const pokeData = await resp.json()
            setPokemon(pokeData)

        }
        fetchPokeData()
    }, [])
    const backHandler = () => {
        props.setView('')
        props.setPokemons(prevPokemons => {
            let foundIndex = -1
            for (let i = 0; i < prevPokemons.length; i++) {
                if (prevPokemons[i].name === pokemon.name)
                    foundIndex = i
            } if (foundIndex >= 0) {
                const updatedPokemon = prevPokemons[foundIndex]
                updatedPokemon.image = pokemon.sprites.front_default
                const newPokemons = [...prevPokemons.slice(0, foundIndex), updatedPokemon, ...prevPokemons.slice(foundIndex+1)]
                return newPokemons
            }
        })
    }
    return (
        <>
            <div>
                <h3 style={{ textTransform: 'uppercase' }}>{pokemon.name}</h3>
                <img src={pokemon.sprites && pokemon.sprites.front_default}></img>
                <img src={pokemon.sprites && pokemon.sprites.back_default}></img>
                <ul>
                    <li>Name: {pokemon.name}</li>
                    <li>Base Experience: {pokemon.base_experience}</li>
                    <li>Height: {pokemon.height}</li>
                </ul>
            </div>
            <button onClick={backHandler}>Back</button>
        </>
    )
}

export default PokeData