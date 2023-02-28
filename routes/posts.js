import express from 'express';
import {getPostsBySearch, getPosts, getPost, createPost, updatePost, deletePost, likePost} from '../controllers/posts.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getPosts)
router.get('/search', getPostsBySearch);
router.get('/:id', getPost);

router.post('/create', auth, createPost);
router.patch('/update/:id', auth, updatePost);
router.delete('/delete/:id', auth, deletePost);
router.patch('/likePost/:id', auth, likePost);

export default router; 