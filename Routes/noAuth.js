const express = require("express");
const publicControllers = require("../Controllers/public.controller");
const router = express.Router();

router.route("/register").post(publicControllers.registerUser);
router.route("/login").post(publicControllers.loginUser);

module.exports = router;