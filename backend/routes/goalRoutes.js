const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    id: 1,
    message: "get goals from here",
  });
});

router.get("/", (req, res) => {
  res.status(200).json({
    id: 1,
    message: "get goals from here",
  });
});

router.post("/", (req, res) => {
  res.status(200).json({
    id: 1,
    message: "set goals from here",
  });
});

router.put("/:id", (req, res) => {
  res.status(200).json({
    id: 1,
    message: `update goal ${req.params.id} from here`,
  });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({
    id: 1,
    message: `delete goal ${req.params.id} from here`,
  });
});

module.exports = router;
