const express = require("express");
const dbConfig = require("./config/database.js");
const registerRoute = require("./routes/registerRoute.js");
const blogRoute = require("./routes/blogRoute.js");
const categoryRoute = require("./routes/categoryRoute.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json("hello");
});

app.use("/v1/auth", registerRoute);
app.use("/v1/blog", blogRoute);
app.use("/v1/category", categoryRoute);

dbConfig();
app.listen(8777, () => {
  console.log("listening to 8777");
});
