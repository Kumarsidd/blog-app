const router = require("express").Router();

const { postUser, loginUser } = require("../controllers/register.js");

router.post("/register", postUser);

router.post("/login", loginUser);

module.exports = router;
