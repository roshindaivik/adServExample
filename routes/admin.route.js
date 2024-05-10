const express = require("express");
const { setCookie, checkCookie } = require("../controller/admin.controller");
const router = express.Router();

router.post("/set-cookie", setCookie);
router.get("/cookie-exist", checkCookie);

module.exports = router;
