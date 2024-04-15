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

router.post("/POSTSearchOrder", (req, res) => {
  const { hotelName, location, amount } = req.body;
  console.log(hotelName, location, amount);
  const query = `
  SELECT * from OrderData 
  where hotelname=$1
  and hotelloc=$2
  and amount=$3;
`;
  database.query(query, [hotelName, location, amount], (err, response) => {
    if (err) {
      console.error("Error: ", err);
      return;
    }
    console.log("response.rows: ", response.rows);
    res.send(response.rows);
  });
});

router.post("/POSTInsertOrder", (req, res) => {
  const { hotelName, location, amount } = req.body;
  console.log(hotelName, location, amount);
  const query = `
  INSERT INTO orderData (hotelName, hotelloc, amount)
VALUES ($1, $2, $3);
`;
  database.query(query, [hotelName, location, amount], (err, response) => {
    if (err) {
      console.error("Error: ", err);
      return;
    }
    console.log("response.rows: ", response.rows);
    res.send(response.rows);
  });
});

module.exports = router;
