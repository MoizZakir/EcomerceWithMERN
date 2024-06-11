import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
process.config()
import { UNAUTHORIZED } from '../../helper/httpStatus'

const verifyToken=(req,res,next)=>{
    const authHeader=req.headers.token
    if(authHeader){
        jwt.verify(token,process.env.SECRET,(err,user)=>{
            if(err)res.status(UNAUTHORIZED).json('toekn is not valid!')
                req.user=user   
            next()
        })
    }
    else{
        return res.status(UNAUTHORIZED).json('user not Authenticate!')
    }
}
export default verifyToken