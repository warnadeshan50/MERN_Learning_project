import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useProductStore } from '../../store/product'

const CreateProduct = () => {
    
    const [newProduct,setNewProduct] = useState({
        name:"",
        price:"",
        image:""
    })

    const toast = useToast()

    const {createProduct} = useProductStore()

    const handleAddProduct=async()=>{
        const {success,message} = await createProduct(newProduct)
        if(!success){
            toast({
                title:"Error",
                description:message,
                status:"error"
            })
        }else{
        toast({
            "title":"Success",
            description:message,
            status:"success"
        })
        console.log("Success : ",success ,"Message : ", message )
    }
    }
  return (
    <Container maxW={"container.sm"}>
        <Heading as={"h1"} size={'2xl'} textAlign={'center'} mb={8}>Add a new product</Heading>
        <Box w={'full'} bg={useColorModeValue("gray.100" , "gray.700")} p={6} rounded={"lg"} shadow={"md"}>
        <VStack spacing={4}>
            <Input placeholder='Product Name' name='name' value={newProduct.name} onChange={(e)=> setNewProduct({...newProduct,name:e.target.value})} />
            <Input placeholder='Product Image' name='image' value={newProduct.image} onChange={(e)=> setNewProduct({...newProduct,image:e.target.value})} />
            <Input placeholder='Product Price' name='price' type={"number"} value={newProduct.price} onChange={(e)=> setNewProduct({...newProduct,price:e.target.value})} />
            <Button bg={"blue.200"} onClick={handleAddProduct} w={"full"}>Add Product</Button>
        </VStack>

        </Box>
    </Container>
  )
}

export default CreateProduct
