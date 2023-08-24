const { mongoose, Schema } = require("mongoose");

const postSchema = new Schema({
  title: { type: String },
  content: { type: String },
  image: { type: String },
  createAt: { type: Date, default: Date.now() },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
