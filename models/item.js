const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  text: { type: String, required: true },
  completed: { type: Boolean, required: true, default: false },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
