const routes = require("express").Router();
const noAuth = require("./noAuth");

routes.use("/public", noAuth);

module.exports = routes;