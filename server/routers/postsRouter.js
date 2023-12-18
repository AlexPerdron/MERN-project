import express from "express";
import { getPosts, createPosts, updatePosts } from "../controllers/postsControllers.js";

const postsRouter = express.Router();

// Posts page
postsRouter.get("/", getPosts);

postsRouter.post("/", createPosts);

postsRouter.post("/update", updatePosts);

export default postsRouter;
