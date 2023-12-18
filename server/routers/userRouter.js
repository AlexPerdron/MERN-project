import express from 'express';

import { signin, signup } from '../controllers/user.js';

const router = express.Router();

// Sign in
router.post('/signin', signin);
// Sign up
router.post('/signup', signup);
export default router;
