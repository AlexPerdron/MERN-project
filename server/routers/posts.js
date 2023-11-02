import express from 'express';
import {getPosts, createPost, updatePost} from '../controllers/posts.js';

const router = express.Router();

// Posts page
router.get('/', getPosts);

router.post('/', createPost);

router.post('/', updatePost);

export default router;