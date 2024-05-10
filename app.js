require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3000;

const adminRoute = require("./routes/admin.route");

app.use(cookieParser());

app.use("/admin", adminRoute);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
