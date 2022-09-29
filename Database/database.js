const mongoose = require("mongoose");

const ConnectToDatabase = (url) => {
  mongoose.connect(url)
    .then(() => {
      console.log("Connected successfully with Database");
    })
    .catch(err => {
      console.log("Connection error", err);
    });
};

module.exports = { ConnectToDatabase };