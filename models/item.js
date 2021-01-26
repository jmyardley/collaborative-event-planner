const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  text: { type: String, required: true },
  completed: { type: Boolean, default: false },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
