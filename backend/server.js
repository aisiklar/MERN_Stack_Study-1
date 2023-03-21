const express = require("express");
const dotenv = require("dotenv").config();
const root = require("./routes/root");
const port = process.env.PORT || 5001;
const path = require("node:path");
const { logger } = require("./middleware/logger");
const app = express();

app.use(logger);

// to receive and parse json data
app.use(express.json());

app.use("/", express.static(path.join(__dirname, "..", "public")));

app.use("/", root);

app.use("/api/goals", require("./routes/goalRoutes"));

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "..", "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 not found" });
  } else {
    res.type("txt").send("404 not found");
  }
});

app.listen(port, () => {
  console.log("server started on port ", port);
});
