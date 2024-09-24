import { Container, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../../store/product'
import ProductCard from '../ProductCard'

const LoadProducts = () => {
    const {fetchProducts,products} = useProductStore()

    useEffect(()=>{
        fetchProducts()
    },[fetchProducts])
    console.log("Products : ",products)

  return (
    <Container maxW="container.xl" py={12}>
        <VStack spacing={8}>
            <Text
            fontSize={"30"}
            fontWeight={"bold"}
            bgGradient={"linear(to-r,cyan.300,blue.600)"}
            bgClip={"text"}
            textAlign={"center"}>Current Products</Text>

            <SimpleGrid columns={{base:2,md:3,lg:6}} spacing={10} w={"full"}>
                {products.map((product)=>(
                    <ProductCard key={product._id} product={product} />
                ))}
                
            </SimpleGrid>

            { products.length === 0&& (
                <Text fontSize='xl' textAlign={"center"} fontWeight={'bold'} color="gray.500">
                No Product Found O_0. 
                <Link to="/products">
                <Text as="span" color="blue.300" _hover={{textDecoration: "underline"}}> Create Products</Text>
                </Link>
            </Text>
            )}
        </VStack>
    </Container>
  )
}

export default LoadProducts