const express = require("express");
const app = express();
const port = 8080;

const projects = require("./api/projects");
const intro = require("./api/intro");

app.get("/", (req, res) => {
  res.send("Working");

app.use("/api/projects", projects);
app.use("/api/intro", intro);

app.listen(port);
