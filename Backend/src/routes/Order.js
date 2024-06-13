import { Router } from "express";
import { verifyToken, verifyTokenAdmin, verifyTokenAuthorization } from "../middlewares/verifyToken.js";
import { orderDelete, orderGet, orderGetAll, orderPost, ordertUpdate, userControllerGetStats } from "../controllers/OrderController/order.js";

const orderRoutes = Router();
orderRoutes.post('/',verifyToken,orderPost)
orderRoutes.put('/:id',verifyTokenAdmin,ordertUpdate)
orderRoutes.delete('/:id',verifyTokenAdmin,orderDelete)
orderRoutes.get('/find/:userId',verifyTokenAuthorization,orderGet)
orderRoutes.get('/',verifyTokenAdmin,orderGetAll)
orderRoutes.get('/stats',verifyTokenAdmin,userControllerGetStats)


export {orderRoutes}