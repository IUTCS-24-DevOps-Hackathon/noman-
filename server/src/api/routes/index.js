import { Router } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import { serve, setup } from 'swagger-ui-express';
import { specs, swaggerConfig } from '../../config/index.js';
import user from './user.js';
import post from './post.js';
const router = Router();
import multer from 'multer'

const specDoc = swaggerJsdoc(swaggerConfig);
const upload = multer({ dest: 'uploads/'})



router.use(specs, serve);
router.get(specs, setup(specDoc, { explorer: true }));
router.post('/images', upload.single('image'), (req, res)=>{
  res.send(req.file)
});
router.use('/user', user);
router.use('/post', post);

export default router;