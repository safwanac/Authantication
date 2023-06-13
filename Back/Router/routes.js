const express = require("express");
const signup = require("../Controller/signup");
const login = require("../Controller/login");

const router = express.Router();

router.route('/login').post(login)
router.route("/signup").post(signup);

module.exports = router;
