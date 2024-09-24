import { Button, Container, Flex, HStack, Text, useColorMode } from '@chakra-ui/react'
import { base } from 'framer-motion/client'
import React from 'react'
import { Link } from 'react-router-dom'
import {IoSunny,IoMoon} from 'react-icons/io5'
import { useProductStore } from '../store/product'

const Navbar = () => {
    const {colorMode,toggleColorMode}=useColorMode()

  return (
    <Container maxW={"1240px"} px={4} >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"} flexDir={{base:'column', sm:'row'}}>
            <Text fontSize={{base:'22',sm:"28"}}
            fontWeight={'bold'}
            textTransform={'uppercase'}
            textAlign={'center'}
            bgGradient={"linear(to-r,cyan.300,blue.500)"}
            bgClip={"text"}>
            <Link to='/home' >SIMCITY SHOPPY</Link>
            </Text>
            <HStack spacing={2} alignItems={'center'} >
                <Link to='/home'><Button>Home</Button></Link>
            <Link to="/products"><Button>Products</Button></Link>
            <Link to="/about"><Button>About</Button></Link>
            <Button onClick={toggleColorMode}>
                {colorMode ==="light" ? <IoMoon />:<IoSunny size="20" />}
            </Button>
            </HStack>

        </Flex>
    </Container>
  )
}

export default Navbar
