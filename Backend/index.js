import express, { Router } from 'express'
import { router } from './src/modules/routes/index.js'
const app=express()
app.get('/',(req,res)=>{
    res.send('hello')
})

app.use(express.json())
app.use('/api',router)
app.listen(8000,()=>{
    console.log('server started ')
})