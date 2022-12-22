const express = require("express");
const app = express();
const port = process.env.PORT || 8888;

const projects = require("./api/projects");
const intro = require("./api/intro");
const skill = require("./api/skills");
const timeline = require("./api/timeline");

app.get("/", (req, res) => {
  res.send("Working");
});

app.use("/api/projects", projects);
app.use("/api/intro", intro);
app.use("/api/skill", skill);
app.use("/api/timeline", timeline);

app.listen(port);
