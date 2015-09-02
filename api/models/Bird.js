var mongoose = require("mongoose");

var schema = mongoose.Schema({
  name: {type: String, required: true, unique: true},
  color: {type: String, enum: ["red", "blue", "white", "magenta", "burgundy", "lemon", "peach", "navajo-white", "lime", "aqua"], required: true},
  smell: {type: String, required: true},
  angry: Boolean
});

module.exports = mongoose.model("Bird", schema);
