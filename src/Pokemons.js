import React from 'react'
import Pokemon from './Pokemon'

//Parent
const Pokemons = (props) => {
  //console.log(props.url)
  return (
    <>
      <ul>
        
        {props.pokemons.map((name, index, ) => <Pokemon key={index} id={index} url={props.url} name={name} setView={props.setView}/>)}
      
      </ul>
    </>
  )
}

export default Pokemons