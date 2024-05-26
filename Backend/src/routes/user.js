import express, {Router} from 'express'

import { userControllerPost } from '../controllers/userControllers/user.js'

const userRoutes = Router();
userRoutes.post('/',userControllerPost)



export {userRoutes}