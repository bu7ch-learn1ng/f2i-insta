const Post = require("../models/PostModel");
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ msg: "Nous avons rencontrer une erreur" });
  }
};

const createPost = async (req, res) => {
  try {
    const newPost = await new Post(req.body);
    newPost.save();
    res.json(newPost);
  } catch (error) {
    res.status(500).json({ msg: "Nous avons rencontrer une erreur" });
  }
};

module.exports = { getAllPosts, createPost };
