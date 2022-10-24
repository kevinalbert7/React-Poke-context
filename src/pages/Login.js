import { Button } from "@chakra-ui/button"
import { useContext } from "react"
import { useNavigate } from 'react-router-dom'
import { Heading, VStack } from "@chakra-ui/layout"
import { Formik } from "formik"
import * as Yup from "yup"

import { UserContext } from '../contexts/User'
import TextField from "../components/TextField"

const Login = () => {
  const { isLogged, setIsLogged } = useContext(UserContext)
  let navigate = useNavigate()

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={Yup.object({
        username: Yup.string()
          .required("Username required")
          .min(6, "Username is too short"),
        password: Yup.string()
          .required("Password required")
          .min(6, "Password is too short"),
        })}
      onSubmit={(values, actions) => {
        setIsLogged(true)
        navigate('/')
        actions.resetForm()
      }}
    >
      {formik => (
        <VStack
          as="form"
          mx="auto"
          w={300}
          h="100vh"
          justifyContent="center"
          spacing={5}
          onSubmit={formik.handleSubmit}
        >
          <Heading>Sign In</Heading>

          <TextField
            label="Username"
            name="username" 
            placeholder="enter username" 
          />

          <TextField
            label="Password"
            name="password"
            type="password"
            placeholder="enter password"
            mb={5}
          />
          <Button 
            w="100%" 
            type="submit" 
            variant="outline" 
            colorScheme="teal"
          >
            Enter
          </Button>
        </VStack>
      )}
    </Formik>
  )
}

export default Login