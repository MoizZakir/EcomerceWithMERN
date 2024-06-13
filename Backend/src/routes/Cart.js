import { Router } from "express";
import { verifyToken, verifyTokenAdmin, verifyTokenAuthorization } from "../middlewares/verifyToken.js";
import { cartDelete, cartGet, cartGetAll, cartPost, cartUpdate } from "../controllers/cartController/cart.js";

const cartRoutes = Router();
cartRoutes.post('/',verifyToken,cartPost)
cartRoutes.put('/:id',verifyTokenAuthorization,cartUpdate)
cartRoutes.delete('/:id',verifyTokenAuthorization,cartDelete)
cartRoutes.get('/find/:userId',verifyTokenAuthorization,cartGet)
cartRoutes.get('/',verifyTokenAdmin,cartGetAll)








export {cartRoutes}