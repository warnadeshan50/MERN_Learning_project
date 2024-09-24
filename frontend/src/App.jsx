import { Box, Button } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import { useProductStore } from './store/product';


function App() {

  return (
    <Box minH={"100vh"}>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/about' element={<AboutPage/>} />
      </Routes>

    </Box>
  )
}

export default App
