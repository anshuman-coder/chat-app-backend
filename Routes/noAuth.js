const express = require("express");
const publicControllers = require("../Controllers/public.controller");
const router = express.Router();

router.route("/register").post(publicControllers.registerUser);


module.exports = router;