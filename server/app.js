const express = require("express");
const app = express();

app.get("/", function (req, res) {
  console.log("Works");
  res.send("Hello World");
});

app.listen(3001, function () {
  console.log("Server started on port 3001");
});
