import React from 'react'
import Pokemon from './Pokemon'

//Parent
const Pokemons = (props) => {
  return (
    <>
      <ul>

        {props.pokemons.map((pokemon, index,) => <Pokemon key={index} pokemon={pokemon} setPokemons={props.setPokemons} setPokemon={props.setPokemon} setView={props.setView} />)}

      </ul>
    </>
  )
}

export default Pokemons