import { Router } from "express";
import { productDelete, productPost, productUpdate, productrGet, productrGetAll } from "../controllers/productController/product.js";
import { verifyTokenAdmin } from "../middlewares/verifyToken.js";

const productRoutes = Router();
productRoutes.post('/',verifyTokenAdmin,productPost)
productRoutes.delete('/:id',verifyTokenAdmin,productDelete)
productRoutes.put('/:id',verifyTokenAdmin,productUpdate)
productRoutes.get('/find/:id',verifyTokenAdmin,productrGet)
productRoutes.get('/',productrGetAll)




export {productRoutes}