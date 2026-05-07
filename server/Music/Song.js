const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  eventType: String,
  date: String,
  location: String,
  message: String
}, { timestamps: true });

module.exports = mongoose.model("Event", EventSchema);