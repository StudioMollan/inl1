import React from 'react'

const Pokemon = (props) => {
  return (
    <div>
      <img src="#"></img>
      <a href>
        {props.name}
      </a>
    </div>
  )
}

const Pokemons = (props) => {
  return (
    <ul className='pokemonsDiv'>
      {props.pokemons.map((name, url, index) => <Pokemon key={index} name={name} url={url} />)}
    </ul>
  )
}

export default Pokemons