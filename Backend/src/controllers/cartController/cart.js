import CartSchema from '../../../models/Cart.js'

//add a cart
export const cartPost=async(req,res)=>{


    const newCart=new CartSchema(req.body)
    try {
        const savedCart=await newCart.save()
        res.status(200).json(savedCart)

    } catch (error) {
        res.status(401).json(error)
        
    }
}

// update a cart
export const cartUpdate=async(req,res)=>{
    
    try {
     const updatecart=await CartSchema.findByIdAndUpdate(req.params.id,{
         $set:req.body
     },{new:true})
     res.status(200).json(updatecart)
 
    } catch (error) {
     res.status(500).json(err)
     
    }
   
 
 }

//delete a cart
export const cartDelete=async(req,res)=>{
    
    try {
     await CartSchema.findByIdAndDelete(req.params.id)
     res.status(200).json("cart has been delted")
 
    } catch (error) {
     res.status(500).json(err)
     
    }
   
 
 }

//get a cart

 export const cartGet=async(req,res)=>{
    try {
        const cart=await CartSchema.findOne({userId:req.params.userId})
        res.status(200).json(cart)
        
    } catch (error) {
        res.status(500).json(error)
        
    }
}
//get all cart
export const cartGetAll=async(req,res)=>{
     
      
    try {
        const cart=await CartSchema.find()
        res.status(200).json(cart)
        

    } catch (error) {
        res.status(500).json(error)
        
    }
}