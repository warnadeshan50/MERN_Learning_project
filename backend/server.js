import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js'
import path from 'path'

dotenv.config();
const app = express();

app.use(express.json())  // allow us t accept data

const PORT=process.env.PORT || 5000

const __dirname = path.resolve();

app.use("/api/products",productRoutes)

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"/frontend/dist")))

    app.get("*",(res,req)=>{
        res.sendFile(path.resolve(__dirname,"forntend","dist","index.html"))
    })
}

console.log(process.env.MONGO_URI)

app.listen(PORT,()=>{
    connectDB()
    console.log('Server strated at http://localhost:'+ PORT)
})
