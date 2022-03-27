const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello world this is charen...</h1>");
});

app.listen(3000, () => {
  console.log("App running on port 9000...");
});
