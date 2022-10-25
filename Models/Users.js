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
  password: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model("users", UsersSchema);