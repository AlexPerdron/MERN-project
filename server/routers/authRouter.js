import express from "express";
import {
    loginUserHandler,
    // registerUserHandler,
} from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.post('/login', loginUserHandler);

//authRouter.post('/register', validate(registerUserSchema), registerUserHandler);

// authRouter.post('/user', validaAndAuthorizeToken, getSingleUserHandler);

// authRouter.post('/test', (res) => {
//     res.send('Hello World');
// });

export default authRouter;

