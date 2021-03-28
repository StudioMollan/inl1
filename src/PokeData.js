import React,{useEffect, useState} from 'react'
import Pokemon from './Pokemon'

const PokeData = (props) => {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        const fetchPokeData = async () => {
            const resp = await fetch('https://pokeapi.co/api/v2/pokemon/9/')//props.url
            const pokeData = await resp.json();
            setPokemon(pokeData)
         
        }
        fetchPokeData()
    }, [])
    const backHandler = () => {
        props.setView('')
    }
    return (
        <>
            <div>
            <h3 style={{ textTransform: 'uppercase'}}>{pokemon.name}</h3>
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