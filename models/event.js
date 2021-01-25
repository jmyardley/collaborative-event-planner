const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  descr: { type: String, required: true },
  items: [{
    type: Schema.Types.ObjectId,
    ref: 'Item'
}]
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;