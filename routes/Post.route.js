const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware")


const {
  getAllPosts,
  createPost,
  getPostById,
  getPost,
  updatePost,
  deletePost
} = require("../controllers/Post.controller");

router.param("postId", getPostById);

router.get("/posts", [authMiddleware.verifyToken], getAllPosts);

router.post("/post", [authMiddleware.verifyToken], createPost);

router.get("/post/:postId", [authMiddleware.verifyToken], getPost);

router.put("/post/:postId/update", updatePost);

router.delete("/post/:postId", deletePost)

module.exports = router;