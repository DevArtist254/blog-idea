const express = require('express');
const {
  getAllPost,
  createAPost,
  getAPost,
  updateAPost,
  deleteAPost,
} = require('./../controller/postController');

const router = express.Router();

router.get('/', getAllPost);
router.post('/', createAPost);

router.get('/:id', getAPost);
router.patch('/:id', updateAPost);
router.delete('/:id', deleteAPost);

module.exports = router;
