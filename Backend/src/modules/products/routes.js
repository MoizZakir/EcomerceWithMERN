import { Router } from "express"

const productRoutes= Router();

productRoutes.get('/products',(req,res)=>{
    return res.json('products api')
}
)
export {productRoutes}