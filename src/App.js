import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider, Box } from '@chakra-ui/react'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Box h="100vh" w="100wv" display="flex" flexDir="column" bg="gray.500">
          <Navbar h="8%"/>
          <Box h="92%" w="100vw">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
