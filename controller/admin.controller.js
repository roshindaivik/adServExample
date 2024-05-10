const setCookies = (req, res) => {
  return res.json({ success: true, msg: "Set Cookie endpoint" });
};

module.exports = { setCookies };
