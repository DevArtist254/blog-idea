const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  author: String,
  body: String,
  image: String,
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
