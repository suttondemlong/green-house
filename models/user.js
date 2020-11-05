const mongoose = require("mongoose")
const Schema = mongoose.Schema

const User = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, require: true },
    imgURL: { type: String, require: true },
    socialmedia: { type: Array, require: false},
  },
  { timestamps: true }
)

module.exports = mongoose.model("users", User)