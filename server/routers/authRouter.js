import express from "express";
import {
    registerUserHandler,
    getAllUserHandler,
    getSingleUserHandler,
    loginUserHandler
    //test
} from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.post('/register', registerUserHandler);

authRouter.post('/login', loginUserHandler);

authRouter.get('/get', getAllUserHandler);

authRouter.get('/get/:userId', getSingleUserHandler);


// authRouter.get('/test', test);

export default authRouter;

