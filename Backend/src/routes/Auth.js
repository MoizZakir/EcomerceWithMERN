import { Router } from "express";
import { AuthControllerRegister, AuthLoginController } from "../controllers/AuthController/Auth.js";

const AuthRoutes = Router();


///register

AuthRoutes.post('/register',AuthControllerRegister)

///login
AuthRoutes.post('/login',AuthLoginController)



export {AuthRoutes}