const Post = require("../models/Post.model");

exports.getAllPosts = (req, res) => {
  Post.find()
    .exec((err, posts) => {
      if (err || !posts) {
        return res.status(400).json({
          error: "Error"
        });
      }
      res.json({
        status: 200,
        message: "Successfully",
        data: posts
      })
    });
};


exports.getPostById = (req, res, next, postId) => {
  Post.findById(postId).exec((err, post) => {
    if (err || !post) {
      return res.status(400).json({
        error: "Something went wrong."
      });
    }
    req.post = post;
    
    next();
  })
}

exports.getPost = (req, res) => {
  return res.json(req.post);
}

exports.createPost = (req, res) => {
  const post = new Post(req.body);

  post.save((err, post) => {
    if (err || !post) {
      return res.status(400).json({
        error: "Something went wrong."
      });
    }
    res.json({ post })
  })
}

exports.updatePost = (req, res) => {
  const post = req.post;
  post.title = req.body.title;
  post.content = req.body.content;

  post.save((err, post) => {
    if (err || !post) {
      return res.status(400).json({
        error: "Something went wrong."
      })
    }
    res.json({ post })
  })
}

exports.deletePost = (req, res) => {
  const post = req.post;

  post.remove((err, post) => {
    if (err || !post) {
      return res.status(400).json({
        error: "something went wrong while deleting the todo",
      });
    }
    res.json({
      status: 200,
      message: "Successfully"
    })
  })
}