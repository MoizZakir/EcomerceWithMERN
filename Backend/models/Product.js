import mongoose from "mongoose";
const ProductSchema=new mongoose.Schema({
    title:{type:String,unique:true,required:true},
    desc:{type:String,required:true},
    img:{type:String,required:true},
    Categories:{type:Array},
    size:{type:String},
    color:{type:String},
    price:{type:Number,required:true},
   
},{timestamps:true})
export default mongoose.model('products',ProductSchema)