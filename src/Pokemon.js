import React ,{useState}from 'react'
import Pokemons from './Pokemons'

// //Child
const Pokemon = (props) => {
  //const [pokeurl, setPokeUrl] = useState([])
  
  const linkHandler = () => {
    props.setView('pokeData')
    //setPokeUrl(props.url[props.id])
    //setPokemon(props.url[props.id])
    //console.log(props.id)// index of allPokemons
    console.log(props.url[props.id])// url @ index
    //alert(props.id)// index of allPokemons
  }
  
  return (
    <li>

      <img src="#"></img>

      <a href='#' onClick={linkHandler} pokeurl={props.url[props.id]}>{props.name}</a>

    </li>
  )
}

export default Pokemon