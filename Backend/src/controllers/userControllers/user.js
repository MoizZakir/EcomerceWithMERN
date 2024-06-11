import bycrypt from 'bcrypt'
import UserSchema from '../../../models/User.js'


//update user  

export const userControllerPost=async(req,res)=>{
   if(req.body.password){
    const salt = await bycrypt.genSalt(10)
                 req.body.password= await bycrypt.hash(password, salt)
   }

   try {
    const updateUser=await UserSchema.findByIdAndUpdate(req.params.id,{
        $set:req.body
    },{new:true})
    res.status(200).json(updateUser)

   } catch (error) {
    res.status(500).json(err)
    
   }
  

}

// get a user
export const userControllerGet=async(req,res)=>{
    try {
        const user=await UserSchema.findById(req.params.id)
        res.status(200).json(user)
        
    } catch (error) {
        res.status(500).json(error)
        
    }
}
// get all user
export const userControllerGetAll=async(req,res)=>{
    try {
        const user=await UserSchema.find()
        res.status(200).json(user)

    } catch (error) {
        res.status(500).json(error)
        
    }
}
export const userControllerGetStats=async(req,res)=>{
    const date =new Date();
    const lastYear=new Date(date.setFullYear()-1)
    try {
        const data=await UserSchema.aggregate([
            {$match:{createdAt:{$gte:lastYear}}},
            {
                $project:{
                    month:{$month:'$createdAt'}
                },
            },
            {
                $group:{
                    _id:'$month',
                    total:{$sum:1}
                }
            }
        ])
        res.status(200).json(data)

    } catch (error) {
        res.status(500).json(error)
        
    }
}