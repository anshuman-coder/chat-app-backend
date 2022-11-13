const mongoose = require("mongoose");

const { Schema } = mongoose;


const UsersSchema = new Schema({
  userName: {
    type: String,
    require: true,
    unique: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  profileImage: {
    type: String,
    default: null,
    require: false
  },
  password: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model("users", UsersSchema);