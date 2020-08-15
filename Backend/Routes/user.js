const express = require("express");
const router = express.Router();
const auth = require("../Controller/auth");

router.get("/sessions", auth.session);

module.exports = router;
