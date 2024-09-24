import { Box, Heading, HStack, IconButton, Image, Text ,useColorModeValue, useDisclosure, useToast} from '@chakra-ui/react'
import React, { useState } from 'react'
import { MdDelete, MdEdit } from "react-icons/md";
import { useProductStore } from '../store/product';
import UpdateProduct from './UpdateProduct';


const ProductCard = ({product}) => {
  const textColor = useColorModeValue("gray.800","white")
  const bg = useColorModeValue("gray.200","gray.700")
  const {deleteProduct} = useProductStore()

  const [updatedProduct,setUpdatedProduct]=useState(product)

  const toast =useToast()

  const {isOpen,onOpen,onClose}= useDisclosure()

  const handleDeleteProduct =async (pid)=>{
    const {success,message} = await deleteProduct(pid)
    if(!success){
      toast({
        title:"Error",
        description:message,
        status: 'error',
        duration: '3000',
        isClosable:true,
      })
    }else{
      toast({
        title:"Success",
        description:message,
        status: 'success',
        duration: '3000',
    })
  }
  }

  return (
    <Box shadow={'lg'} bg={bg} rounded={"lg"} overflow={"hidden"} transition={'all 0.3s'} _hover={{transform:"translateY(-5px)",shadow: "xl"}}>    
        <Image src={product.image} alt={product.name} h={230} w="full" objectFit={"center"} objectPosition={"center"} />
        <Box p={4}>
            <Heading as="h3" size={"xs"} mb={2} h={10}>{product.name}</Heading>
            <Text frontWeight="bold" color={textColor} h={5} >Rs.{product.price}</Text>
            <HStack spacing={2} marginTop={3} >
                <IconButton icon={<MdEdit />}  colorScheme='blue' onClick={onOpen} />
                <IconButton icon={<MdDelete />}  colorScheme='red' onClick={()=>handleDeleteProduct(product._id)} />
            </HStack>
        </Box>
        <UpdateProduct onClose={onClose} onOpen={onOpen} isOpen={isOpen} product={product} updatedProduct={updatedProduct} setUpdatedProduct={setUpdatedProduct} />
    </Box>
  )
}

export default ProductCard
