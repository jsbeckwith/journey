const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  displayname: {
    type: String,
    required: true,
    default: "friend"
  },
  password: {
    type: String,
    required: true
  },
  // friends: {  // array of user ids
  //   type: Array,
  //   default: []
  // }
});
module.exports = User = mongoose.model("users", UserSchema);