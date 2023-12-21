import express from "express";
import {
    createUserHandler
    //test
} from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.post('/create', createUserHandler);

// authRouter.get('/test', test);

export default authRouter;

