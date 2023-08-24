const { getAllPosts, createPost } = require("../controllers/PostController");

const router = require("express").Router();

router.get("/all", getAllPosts);

router.post("/new", createPost);

module.exports = router;
