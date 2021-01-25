const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  descr: { type: String, required: true },
  items: { type: Array, required: true}
});

const Event = mongoose.model("Event", userSchema);

module.exports = Event;
