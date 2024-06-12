import ProductSchema from '../../../models/Product.js'

//add a product
export const productPost=async(req,res)=>{


    const newProduct=new ProductSchema(req.body)
    try {
        const savedProduct=await newProduct.save()
        res.status(200).json(savedProduct)

    } catch (error) {
        res.status(401).json(error)
        
    }
}

// update a product
export const productUpdate=async(req,res)=>{
    
    try {
     const updateProduct=await ProductSchema.findByIdAndUpdate(req.params.id,{
         $set:req.body
     },{new:true})
     res.status(200).json(updateProduct)
 
    } catch (error) {
     res.status(500).json(err)
     
    }
   
 
 }

//delete a product
export const productDelete=async(req,res)=>{
    
    try {
     await ProductSchema.findByIdAndDelete(req.params.id)
     res.status(200).json("product has been delted")
 
    } catch (error) {
     res.status(500).json(err)
     
    }
   
 
 }

//get a product

 export const productrGet=async(req,res)=>{
    try {
        const product=await ProductSchema.findById(req.params.id)
        res.status(200).json(product)
        
    } catch (error) {
        res.status(500).json(error)
        
    }
}
//get all product
export const productrGetAll=async(req,res)=>{
    const qNew=req.query.new
    const qCategory=req.query.category
    try {
        let product;
    if(qNew)
        {
            product= await ProductSchema.find().sort({createdAt:-1}).limit(5)
        }
        else if(qCategory){
            product=await ProductSchema.find({
                Categories:{
                    $in:[qCategory]
                }
            })
        }
        else{
            product=await ProductSchema.find()
        }
        // const product=await ProductSchema.find()
        res.status(200).json(product)

    } catch (error) {
        res.status(500).json(error)
        
    }
}