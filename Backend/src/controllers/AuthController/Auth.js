import { responseMessages } from '../../../helper/Constants.js';
import { ALREADYEXISTS, BADREQUEST, OK, UNAUTHORIZED } from '../../../helper/httpStatus.js';
import UserSchema from '../../../models/User.js'
import jwt from 'jsonwebtoken'
import bycrypt from 'bcrypt'
import { sendError } from '../../utils/resopnses.js'
import dotenv from 'dotenv'

dotenv.config()
const {
    GET_SUCCESS_MESSAGES,
    INVITATION_LINK_UNSUCCESS,
    MISSING_FIELDS,
    MISSING_FIELD_EMAIL,
    NO_USER,
    NO_USER_FOUND,
    PASSWORD_AND_CONFIRM_NO_MATCH,
    PASSWORD_CHANGE,
    PASSWORD_FAILED,
    RESET_LINK_SUCCESS,
    SUCCESS_REGISTRATION,
    UN_AUTHORIZED,
    USER_EXISTS,
    USER_NAME_EXISTS
} = responseMessages;

///register Controller;

const AuthControllerRegister = async (req, res) => {


    try {
        const { username, email, password } =
            req.body;
        if (!password || !username || !email) {
            return res
                .status(BADREQUEST) //BADREQUEST
                .send(sendError({ status: false, message: responseMessages.MISSING_FIELDS }));

        }
        const userCheck = await UserSchema.findOne({ email: email });

        console.log(userCheck, "====>> user")
        if (userCheck) {
            return res
                .status(ALREADYEXISTS)
                .send(sendError({ status: false, message: responseMessages.USER_EXISTS }));
        } else {

            const user = await UserSchema.findOne({ username: username });
            if (user) {
                return res
                    .status(ALREADYEXISTS)
                    .send(sendError({ status: false, message: responseMessages.USER_NAME_EXISTS }));
            } else {

                const salt = await bycrypt.genSalt(10)
                const hashedPassword = await bycrypt.hash(password, salt)
                const user = new UserSchema({
                    username: username,
                    email: email,
                    password: hashedPassword
                })
                const savedUser = await user.save()
                console.log(savedUser)
                res.send(savedUser)


            }
        }







    } catch (error) {
        console.log(error)
        res.send(error)

    }
}

///login Controller


const AuthLoginController = async (req, res) => {

    try {
        const { email, password } = req.body;

        if (email && password) {
            let user = await UserSchema.findOne({ email: email });
            !user && res.status(UNAUTHORIZED).json(NO_USER_FOUND)
            const validPassword = await bycrypt.compare(password, user.password)
            console.log(validPassword)
            !validPassword  && res.status(UNAUTHORIZED).json(NO_USER)

            const aceesToken=jwt.sign({
                id:user._id,
                isAddmin:user.isAdmin
            },process.env.SECRET
        ,{expiresIn:'3d'})

        res.status(OK).json({GET_SUCCESS_MESSAGES,user,aceesToken})


        } else {
            res.status(BADREQUEST).json(MISSING_FIELDS)

        }

    } catch (error) {
        console.log(error)

    }



}

export { AuthControllerRegister, AuthLoginController }