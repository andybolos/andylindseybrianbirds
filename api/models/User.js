var mongoose = require("mongoose");

var schema = mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  birds: [{type: String, ref: "Bird"}]
});

module.exports = mongoose.model("User", schema);
