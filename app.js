const express = require("express");
require("express-async-errors");
const morgan = require("morgan");
const { errorHandler } = require("./middlewares/error");
require("dotenv").config();
const cors = require('cors');
require("./db");
const userRouter = require("./routes/user");
const actorRouter = require("./routes/actor")
const { handleNotFound } = require("./utils/helper");
const movieRouter = require('./routes/movie');

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/user", userRouter);
app.use("/api/actor", actorRouter);
app.use("/api/movie", movieRouter);
//app.use('/*' ,handleNotFound )

app.use(errorHandler);

// app.post(
//   "/sign-in",
//   (req, res, next) => {
//     const { email, password } = req.body;
//     if (!email || !password)
//       return res.json({ error: "email/password missing!" });
//     next();
//   },
//   (req, res) => {
//     res.send("<h1>Hello I am about page</h1>");
//   }
// );

app.listen(8000, () => {
  console.log("the port is listening on port 8000");
});
