import { Router } from 'express';
import { createPost } from '../controllers/post/index.js';
import { auth, imageUpload } from '../middlewares/index.js';

const router = Router();

router.post('/', createPost);
export default router