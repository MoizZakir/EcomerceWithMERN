import { Router} from "express";
import { userRoutes } from "../users/routes.js";
import { productRoutes } from "../products/routes.js";
const router=Router();
router.use('/user',userRoutes)
router.use('/products',productRoutes)
export {router}