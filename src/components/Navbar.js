import React from 'react'
import { Flex, HStack, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Flex
        w="100%"
        px="3"
        py="3"
        align="center"
        justify="space-around"
        bg="gray.700"
      >
        <HStack as="nav" spacing="5">
          <Link to="/">
            <Button colorScheme='teal' variant='outline'>
              Home
            </Button>
          </Link>
        </HStack>
        <HStack>
          <Link to="/login">
            <Button colorScheme='teal' variant='outline'>
              Login
            </Button>
          </Link>
        </HStack>
      </Flex>
  )
}

export default Navbar