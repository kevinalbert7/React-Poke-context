import { useState, useEffect } from 'react'
import { Box, Image, Heading, VStack, Button } from'@chakra-ui/react'

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
    <Box w="100wv" maxH="90%" display="flex" alignItems="center" justifyContent="center" flexDirection="column">
      <h1 style={{ marginTop: "0" }}>Home</h1>
        {pokemon === null ? "" :
          <div
            style={{
              borderImage: "linear-gradient(rgba(131,58,180,1) 0%, rgba(253,29,29,1) 20%, rgba(252,176,69,1) 40%, rgba(140,252,69,1) 60%, rgba(23,230,242,1) 80%, rgba(84,69,252,1) 100%) 1",
              borderWidth: "4px",
              borderStyle: "solid",
              borderRadius: "7px",
              backgroundColor: "#718096"
            }}
          >
            <Image src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
            <Box pb='10'>
              <Box display='flex' flexDirection='column' alignItems='center'>
                <Heading mt="0">{pokemon.name}</Heading>
                  <VStack spacing={10}>
                  <Box
                    color='BlackAlpha 800'
                    fontWeight='600'
                    textTransform='uppercase'
                  >Height: {pokemon.height}</Box>
                  <Box
                    color='BlackAlpha 800'
                    fontWeight='600'
                    textTransform='uppercase'
                  >Weight: {pokemon.weight}</Box>
                  <Box
                    color='BlackAlpha 800'
                    fontWeight='600'
                    textTransform='uppercase'
                  >Type: {pokemon.types.map(element => element.type.name)}</Box>
                </VStack>
              </Box>
            </Box>
          </div>
        }
        <button 
          style={{
            height: "50px", 
            width: "170px",
            marginTop: "20px",
            background: "linear-gradient(45deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 20%, rgba(252,176,69,1) 40%, rgba(140,252,69,1) 60%, rgba(23,230,242,1) 80%, rgba(84,69,252,1) 100%)",
            // backgroundColor: "transparent",
            // backgroundBlendMode: "overlay",
            color: "black", 
            fontSize: "16px", 
            fontWeight: "bold", 
            cursor: "pointer",
            borderRadius: "7px"
            // borderImage: "linear-gradient(to right, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 20%, rgba(252,176,69,1) 40%, rgba(140,252,69,1) 60%, rgba(23,230,242,1) 80%, rgba(84,69,252,1) 100%) 1",
            // borderWidth: "4px",
            // borderStyle: "solid",
            // border: "2px solid black", 
            // borderRadius: "8px", 
            // backgroundColor: "#718096", 
          }}
          onClick={() => getRandomPokemon()}>Change Pokemon</button>
    </Box>
  )
}

export default Home