import React ,{useState}from 'react'
import Pokemons from './Pokemons'

//Child
const Pokemon = (props) => {
  const linkHandler = () => {
    props.setView('pokeData')
    props.setPokemon(props.pokemon)

  }
  const removeHandler=()=>{
    props.setPokemons(prevPokemons => {
      let foundIndex = -1
      for (let i = 0; i < prevPokemons.length; i++) {
          if (prevPokemons[i].name === name)
              foundIndex = i
      } if (foundIndex >= 0) {
          const newPokemons = [...prevPokemons.slice(0, foundIndex), ...prevPokemons.slice(foundIndex+1)]
          return newPokemons
      }
  })

  }
  const {name, url, image} = props.pokemon 
 
  return (
    <li>

      <img src={image ? image : '#'}/>

      <a href='#' onClick={linkHandler} pokeurl={url}>{name}</a>
      <button onClick={removeHandler}>Remove</button>
    </li>
  )
}

export default Pokemon