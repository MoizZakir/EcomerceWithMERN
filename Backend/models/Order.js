import mongoose from "mongoose";
const OrderSchema=new mongoose.Schema({
    userId:{type:String,required:true},
    products:[
        {
            productId:{
                type:String,
            },
            quantity:{
                type:Number,
                default:1,

            }
        }
    ],
    amount:{
        type:Number,
        required:true,
    }
    ,
    status:{
        type:String,
        default:'pending'
    }
    ,address:{type:Object,required:true}
    
   
},{timestamps:true})
export default mongoose.model('order',OrderSchema)