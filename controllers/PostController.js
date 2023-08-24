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
const getPost = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await Post.findOne({ _id: id });
    res.json(post);
  } catch (error) {
    res.status(500).json({ msg: "Nous avons rencontrer une erreur" });
  }
};

const UpdatePost = async (req,res, next) => {
  const id = req.params.id;

  try {
    let post = await Post.findOneAndUpdate(id, req.body)
    res.json(post)
  } catch (error) {
    next(error)
  }
}
const deletePost = async(req,res) => {
  const id = req.params.id
 await Post.findOneAndRemove({_id: id})
 res.json({msg:"Le post a bien été supprimé !"})
}
module.exports = { getAllPosts, createPost, getPost, UpdatePost, deletePost
 };