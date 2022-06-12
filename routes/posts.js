const express=require('express');
const router=express.Router();
const getPosts=require('../controllers/posts')
const createPost=require('../controllers/posts')

router.get('/',getPosts)
router.get('/',createPost)

module.exports = router;