import Order from '../../../models/Order.js'
import OrderSchema from '../../../models/Order.js'

//add a order
export const orderPost=async(req,res)=>{


    const newOrder=new OrderSchema(req.body)
    try {
        const savedOrder=await newOrder.save()
        res.status(200).json(savedOrder)

    } catch (error) {
        res.status(401).json(error)
        
    }
}

// update a order
export const ordertUpdate=async(req,res)=>{
    
    try {
     const updateOrder=await OrderSchema.findByIdAndUpdate(req.params.id,{
         $set:req.body
     },{new:true})
     res.status(200).json(updateOrder)
 
    } catch (error) {
     res.status(500).json(err)
     
    }
   
 
 }

//delete a order
export const orderDelete=async(req,res)=>{
    
    try {
     await OrderSchema.findByIdAndDelete(req.params.id)
     res.status(200).json("order has been delted")
 
    } catch (error) {
     res.status(500).json(err)
     
    }
   
 
 }

//get a order

 export const orderGet=async(req,res)=>{
    try {
        const order=await OrderSchema.findOne({userId:req.params.userId})
        res.status(200).json(order)
        
    } catch (error) {
        res.status(500).json(error)
        
    }
}
//get all order
export const orderGetAll=async(req,res)=>{
     
      
    try {
        const order=await OrderSchema.find()
        res.status(200).json(order)
        

    } catch (error) {
        res.status(500).json(error)
        
    }
}

//get Monthly Income
export const userControllerGetStats=async(req,res)=>{
    const date =new Date();
   const lastMonth=new Date(date.setMonth(date.getMonth()-1))
   const previousMonth=new Date(new Date().setMonth(lastMonth.getMonth()-1))
   try {
    const income=await Order.aggregate([
        {$match:{createdAt:{$gte:previousMonth}}},
        {
            $project:{
                month:{$month:"$createdAt"},
                sales:"$amount",
            },
            
            
            },
        {
            $group:{
                _id:"$month",
                total:{$sum:"$sales"},
            }
        }
           
    ])
    res.status(200).json(income)
    
   } catch (error) {
    res.status(500).json(error)
    
   }
}