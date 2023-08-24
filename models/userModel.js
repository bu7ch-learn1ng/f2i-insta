
const { mongoose, Schema } = require("mongoose");

const userSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  address: {type: String, required:true}
})


const User = mongoose.model('User',userSchema)
module.exports = User