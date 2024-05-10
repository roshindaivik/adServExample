const express = require("express");
const { setCookies } = require("../controller/admin.controller");
const router = express.Router();

router.post("/set-cookie", setCookies);

module.exports = router;
