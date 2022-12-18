const express = require("express");
const app = express();
const port = 8080;

const projects = require("./api/projects");

app.get("/", (req, res) => {
  res.send("Working");

});

app.use("/api/projects", projects);

app.listen(port);
