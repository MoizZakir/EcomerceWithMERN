import express, { Router } from 'express'
import { dbConnection } from './src/utils/config.js'
import { userRoutes } from './src/routes/user.js'
import { AuthRoutes } from './src/routes/Auth.js'
import { productRoutes } from './src/routes/Product.js'
const app=express()


app.use(express.json())

dbConnection()
app.use('/api/auth',AuthRoutes)
app.use('/api/user',userRoutes)
app.use('/api/product',productRoutes)

app.listen(8000,()=>{
    console.log('server started ')
})