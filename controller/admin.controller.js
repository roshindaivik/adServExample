const crypto = require("crypto");

const setCookie = (req, res) => {
  const uniqueId = crypto.randomBytes(16).toString("hex");
  res.cookie("adServSSP", uniqueId, {
    maxAge: 365 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });
  return res.json({ success: true, msg: "Set Cookie endpoint" });
};

const checkCookie = (req, res) => {
  if (req.cookies?.adServSSP) {
    return res.json({ success: true, msg: "Cookie exists." });
  } else {
    return res.json({ success: false, msg: "Cookie does not exist." });
  }
};

module.exports = { setCookie, checkCookie };
