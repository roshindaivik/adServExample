require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cookieParser());
app.use(cors({ origin: "http://127.0.0.1:5500", credentials: true }));

const adminRoute = require("./routes/admin.route");

app.use("/admin", adminRoute);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
