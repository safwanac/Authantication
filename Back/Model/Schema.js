const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  Name: { type: String },
  Email: { type: String },
  Password: { type: String },
});

const User = mongoose.model("Authantication", userSchema);

module.exports = User;
