const Post = require('./../model/postModel');

exports.getAllPost = async (req, res) => {
  try {
    const posts = await Post.find();

    res.status(200).json({
      length: posts.length,
      data: posts,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

exports.createAPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);

    return res.status(200).json({
      createPost: post,
    });
  } catch (error) {
    return res.status(404).json({
      error: error.message,
    });
  }
};

exports.getAPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        error: error.message,
      });
    }

    return res.status(200).json({
      data: post,
    });
  } catch (error) {
    return res.status(404).json({
      error: error.message,
    });
  }
};

exports.updateAPost = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const post = await Post.findByIdAndUpdate(id, body);

    return res.status(200).json({
      data: post,
    });
  } catch (error) {
    return res.status(404).json({
      error: error.message,
    });
  }
};

exports.deleteAPost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);

    return res.status(204).json({
      message: 'Content deleted',
    });
  } catch (error) {
    return res.status(404).json({
      error: error.message,
    });
  }
};
