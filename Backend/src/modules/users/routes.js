import { Router } from "express"

const userRoutes= Router();

userRoutes.get('/user',(req,res)=>{
    return res.json('user api')
}
)
export {userRoutes}