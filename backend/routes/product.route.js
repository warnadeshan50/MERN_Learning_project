import express  from 'express'
import { deleteProduct, getProducts, saveProduct, updateProduct } from '../controllers/product.controller.js'

const router = express.Router()

router.post("/",saveProduct)

router.delete("/:id", deleteProduct)

router.get("/",getProducts)

router.put("/:id",updateProduct)

export default router