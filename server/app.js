const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/", function (req, res) {
  console.log("Works");
  const { id, audio, name, title, img, inPlaylist } = req.body;
  console.log(req.body);
  if (id === undefined || audio === undefined) {
    res.status(400).send("Invalid request body");
    return;
  }
  const newSong = {
    id: id,
    audio: audio,
    name: name,
    title: title,
    img: img,
    inPlaylist: inPlaylist,
  };
  const jsonData = `,\n${JSON.stringify(newSong, null, 2)}\n];`;

  fs.appendFile("../src/data/demo-test.js", jsonData, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error appending data to file");
      return;
    }
    console.log("Data appended to file!");
  });
});

app.get("/", function (req, res) {
  res.send("Hello, server is up");
});

app.listen(3001, function () {
  console.log("Server started on port 3001");
});
