// importing all necessary files
const express = require("express");
const mongoose = require("mongoose");
// initializing the env file
require("dotenv").config();

// creating express application name app
const app = express();

// getting the port from env file
const port = process.env.PORT || 8080;


app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}/api`);
});