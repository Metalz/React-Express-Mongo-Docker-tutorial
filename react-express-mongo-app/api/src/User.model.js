const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String
  },
  age: {
    type: long
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
