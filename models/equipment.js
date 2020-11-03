const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Equipment = new Schema(
  {
    name: { type: String, required: true },
    imgURL: { type: String, required: true },
    description: { type: String, required: true },
    money: { type: Number, required: true },
    energy: { type: Number, required: true },
    trees: { type: Number, required: true },
    water: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("equipment", Equipment);