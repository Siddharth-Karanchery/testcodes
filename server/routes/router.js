const express = require("express");

const router = express.Router();

router.get("/GETorderData", (req, res) => {});

router.post("/POSTorderData", (req, res) => {
  const { key1, key2, key3 } = req.body;
  res.send("Data Submitted successfully!");
});

module.exports = router;
