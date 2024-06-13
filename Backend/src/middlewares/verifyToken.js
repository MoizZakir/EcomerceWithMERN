import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
// import { UNAUTHORIZED } from '../../helper/httpStatus'
dotenv.config()


const verifyToken=(req,res,next)=>{
    const authHeader=req.headers.token
    if(authHeader){
        const token=authHeader.split(' ')[1]
        jwt.verify(token,process.env.SECRET,(err,user)=>{
            if(err)res.status(401).json('toekn is not valid!')
                req.user=user   
            next()
        })
    }
    else{
        return res.status(401).json('user not Authenticate!')
    }
}
const verifyTokenAuthorization=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id==req.params.id || req.user.isAdmin){
            next()
        }
        else{
            res.status(403).json('you are not allowed to do that')
        }
    })


}
const verifyTokenAdmin=(req,res,next)=>{
    verifyToken(req,res,()=>{
        console.log(req.user)
        if(req.user.isAddmin){
            next()
        }
        else{
            res.status(403).json('you are not admin to do that')
        }
    }) 

}
export { verifyTokenAuthorization,verifyTokenAdmin,verifyToken}
