const express = require('express');
const {getAllPost, createAPost} = require('./../controller/postController');

const router = express.Router();

router.get('/', getAllPost);
router.post('/', createAPost);

module.exports = router;
