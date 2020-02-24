const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  displayname: {
    type: String,
    required: true,
    default: "friend"
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  // friends: {
  //   type: Array,
  //   default: []
  // }
});
module.exports = User = mongoose.model("users", UserSchema);