import { useState, useEffect } from 'react'
import { Box, Image, Heading, VStack, Button } from'@chakra-ui/react'

const Home = () => {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() =>  {
    fetch('https://pokeapi.co/api/v2/pokemon/1')
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
    <Box w='100wv' maxH='90%' display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
      <VStack mt={10} spacing={5}>
        <Heading>Home</Heading>
        {pokemon === null ? '' :
          <div
            style={{
              borderImage: 'linear-gradient(rgba(131,58,180,1) 0%, rgba(253,29,29,1) 20%, rgba(252,176,69,1) 40%, rgba(140,252,69,1) 60%, rgba(23,230,242,1) 80%, rgba(84,69,252,1) 100%) 1',
              borderWidth: '4px',
              borderStyle: 'solid',
              borderRadius: '7px',
              backgroundColor: '#2D3748'
            }}
          >
            <Image src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} width='300px'/>
            <Box pb='10'>
              <Box display='flex' flexDirection='column' alignItems='center'>
                <Heading mb={3}>{pokemon.name}</Heading>
                  <VStack spacing={2}>
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
        <Button 
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          borderWidth='2px'
          borderColor='gray.700'
          color='gray.700'
          variant='solid'
          onClick={() => getRandomPokemon()}
        >
          Change Pokemon
        </Button>
      </VStack>
    </Box>
  )
}

export default Home