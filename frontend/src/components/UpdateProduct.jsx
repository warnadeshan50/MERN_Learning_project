import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack ,Input ,Button, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useProductStore } from '../store/product'

const UpdateProduct = (props) => {

  const {updateProduct} = useProductStore()

  const toast=useToast()

  const handleUpdateProduct = async(pid,updatedProduct) =>{
    const {success,message}=await updateProduct(pid,updatedProduct)
    props.onClose()
    if(!success){
      toast({
        title:"Error",
        description: "Server Error",
        status: "error",
        duration:3000,
      })
    }else{
      toast({
        title:"Success",
        description: "Product Updated Successfully",
        status: "success",
        duration:3000,
      })
    }
  }  
    
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
          <ModalOverlay />
            <ModalContent>
              <ModalHeader>Update Product</ModalHeader>
              <ModalCloseButton  />
              <ModalBody>
              <VStack spacing={4}>
                    <Input placeholder='Product Name' name='name' value={props.updatedProduct.name} onChange={(e)=> props.setUpdatedProduct({...props.updatedProduct,name:e.target.value})} />
                    <Input placeholder='Product Image' name='image' value={props.updatedProduct.image} onChange={(e)=> props.setUpdatedProduct({...props.updatedProduct,image:e.target.value})}  />
                    <Input placeholder='Product Price' name='price' value={props.updatedProduct.price} onChange={(e)=> props.setUpdatedProduct({...props.updatedProduct,price:e.target.value})} type={"number"}  />
                    <Button bg={"blue.200"}  w={"full"} onClick={()=>handleUpdateProduct(props.product._id,props.updatedProduct)}>Update Product</Button>
                    <Button variant='ghost' onClick={props.onClose}>Cancel</Button>
                </VStack>
              </ModalBody>
            </ModalContent>
        </Modal>
  )
}

export default UpdateProduct