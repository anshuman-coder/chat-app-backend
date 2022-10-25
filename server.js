// importing all necessary files
const express = require("express");
const cors = require("cors");
const { ConnectToDatabase } = require("./Database/database");
const routes = require("./Routes");
// initializing the env file
require("dotenv").config();

// Connecting to the database
ConnectToDatabase(process.env.DB_URL);

// creating express application name app
const app = express();

// getting the port from env file
const port = process.env.PORT || 8080;

// middlewares
app.use(cors());
app.use(express.json());
app.use("/", routes);

// listening the port of application
app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}/`);
});