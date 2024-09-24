import Product from "../models/product.model.js"
import mongoose from 'mongoose'

export const saveProduct=async(req,res)=>{
    const product = req.body

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({ success:false, message:"please provide all field"})
    }
    const newProduct = new Product(product)
    try {
        await newProduct.save()
        res.status(201).json({success:true,data:newProduct})
    } catch (error) {
        console.error("Error in Create product : ",error.message)
        res.status(500).json({success:false,message:"Server Error"})
    }
}

export const getProducts =async(req,res)=>{
    try {
        const products = await Product.find({})
        res.status(200).json({success:true,data: products})
    } catch (error) {
        console.log("Error in fletching Products : ",error.message)
        res.status(500).json({success:false,message:"Server error"})
    }
}

export const deleteProduct = async (req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:"Invalid product id"})
    }
    try {
        await Product.findByIdAndDelete(id)
        res.status(200).json({success: true ,message:" Product deleted"})
    } catch (error) {
        console.log("Error in deleteing Product : ",error.message)
        res.status(500).json({success:false,message:"Server error"})
    }
}

export const updateProduct = async(req,res)=>{
    const product=req.body
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:"Invalid product id"})
    }

    try {
		const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
		res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        console.log("Server error : ",error.message)
        res.status(500).json({success:false,message:"Server Error"})
    }
}