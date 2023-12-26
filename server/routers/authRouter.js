import express from "express";
import {
    registerUserHandler,
    getSingleUserHandler,
    loginUserHandler,
    //test
} from "../controllers/authController.js";
import { validateAndAuthorizeToken } from "../middleware/jwt.js";

const authRouter = express.Router();

authRouter.post('/register', registerUserHandler);

authRouter.post('/login', loginUserHandler);

authRouter.get('/get/:userId', getSingleUserHandler);

// authRouter.get('/test', test);

export default authRouter;

