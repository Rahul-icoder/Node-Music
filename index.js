const express = require("express");
const { PORT } = require("./config.js");
const path = require("path");
const { readdir } = require("fs");
const util = require("util");
const morgan = require("morgan");
const cors = require("cors");
var player = require("play-sound")((opts = {}));
const readdirPromise = util.promisify(readdir);

const app = express();
app.use(morgan("dev"));
app.use(express.static("public"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(
  cors({
    origin: "*",
  })
);

let currentSong;

app.get("/", async (req, res) => {
  try {
    const musicList = await readdirPromise(path.join("public", "music"));

    res.render(path.join(__dirname, "views", "index.ejs"), {
      musicList,
    });
  } catch (err) {
    console.log(err);
  }
});

app.post("/play/:song", async (req, res) => {
  try {
    const songName = `${req.params.song}`;
    console.log(songName);
    const songPath = path.join(__dirname, "public", "music", songName);
    currentSong = player.play(
      songPath,
      //   { afplay: ["-v", 1] /* lower volume for afplay on OSX */ },
      function (err) {
        if (err) console.log(err);
      }
    );
    res.render(path.join(__dirname, "views", "index.ejs"), {
      songName,
      msg: `playing song ${songName}`,
    });
  } catch (err) {
    console.log(err);
  }
});

app.delete("/stop", async (req, res) => {
  try {
    if (currentSong) {
      currentSong.kill();
      return res.send({ status: "success", msg: "song stop" });
    }
    res
      .status(200)
      .send({ status: "success", msg: "song is not playing right now" });
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log(`🚀 server running on port ${PORT}`);
});
