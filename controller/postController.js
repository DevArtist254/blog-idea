const Post = require('./../model/postModel');

exports.getAllPost = (req, res) => {
  res.status(200).json({
    backendTest: 'hello world',
  });
};

exports.createAPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);

    res.status(200).json({
      createPost: post,
    });
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
};
