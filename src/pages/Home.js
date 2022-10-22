import { useState, useEffect } from 'react'

const Home = () => {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() =>  {
    fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then(response => response.json())
      .then(result => setPokemon(result))
  }, [])
  
  const getRandomPokemon = () => {
    let randomId = Math.floor(Math.random() * (151 - 1) + 1)
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
      .then(response => response.json()) 
      .then(result => setPokemon(result))
  }

  return (
    <>
      <h1>Home</h1>
        {pokemon === null ? "" : 
          <>
            <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
            <p>{pokemon.name}</p>
            <p>{pokemon.height}</p>
            <p>{pokemon.weight}</p>
            {pokemon.types.map(element => element.type.name)}
          </>
        }
        <button type="button" onClick={() => getRandomPokemon()}>Change Pokemon</button>
    </>
  )
}

export default Home