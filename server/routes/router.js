const express = require("express");
const database = require("../database");

const router = express.Router();

router.get("/GETorderData", (req, res) => {
  const query = `
  SELECT * from orderData;
`;
  database.query(query, (err, response) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("response: ", response);
    res.send(response.rows);
  });
  // database.end();
});

router.post("/POSTorderData", (req, res) => {
  const { key1, key2, key3 } = req.body;
  res.send("Data Submitted successfully!");
});

module.exports = router;
