import express, { Router } from 'express'
import { dbConnection } from './src/utils/config.js'
import { userRoutes } from './src/routes/user.js'
const app=express()


app.use(express.json())

dbConnection()
app.use('/api/user',userRoutes)

app.listen(8000,()=>{
    console.log('server started ')
})