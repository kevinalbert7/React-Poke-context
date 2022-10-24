import { useContext } from "react"
import { useNavigate, Link } from "react-router-dom"
import { Flex, HStack, Button } from "@chakra-ui/react"

import { UserContext } from "../contexts/User"

const Navbar = () => {
  const { isLogged, setIsLogged } = useContext(UserContext)

  let navigate = useNavigate()

  const logOut = () => {
    setIsLogged(false)
    navigate("/")
  }

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
            <Button colorScheme="teal" variant="outline">
              Home
            </Button>
          </Link>
        </HStack>
        <HStack>
          {isLogged === false ? 
            <Link to="/login"> 
              <Button colorScheme="teal" variant="outline">
                Login
              </Button>
            </Link>  
          : 
            <Link>
              <Button colorScheme="teal" variant="outline" onClick={logOut}>
                Logout
              </Button>
            </Link>
          }
        </HStack>
      </Flex>
  )
}

export default Navbar