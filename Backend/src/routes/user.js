import express, {Router} from 'express'

import { userControllerGet, userControllerGetAll, userControllerGetStats, userControllerPost } from '../controllers/userControllers/user.js'
import {verifyTokenAdmin, verifyTokenAuthorization} from '../middlewares/verifyToken.js';

const userRoutes = Router();
//userUpdate
userRoutes.put('/:id',verifyTokenAuthorization,userControllerPost)

//get a User

userRoutes.get('/find/:id',verifyTokenAdmin,userControllerGet) 

//get all user
userRoutes.get('/',verifyTokenAdmin,userControllerGetAll)

// user Stats
userRoutes.get('/stats',verifyTokenAdmin,userControllerGetStats)


export {userRoutes}