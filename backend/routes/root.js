const express = require("express");
const path = require("path");

const router = express.Router();

router.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "views", "index.html"));
});

// regex haricinde, aşağıdaki şekilde de çalışıyor.
/* router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "views", "index.html"));
});

router.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "views", "index.html"));
});
router.get("/index.html", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "views", "index.html"));
}); */

module.exports = router;
