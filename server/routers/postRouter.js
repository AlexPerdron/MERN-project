import express from "express";
import { getPosts, createPosts, updatePosts } from "../controllers/postController.js";

const postRouter = express.Router();

// Posts page
postRouter.get("/", getPosts);

postRouter.post("/", createPosts);

postRouter.post("/update", updatePosts);

export default postRouter;
