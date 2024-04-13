// const { Pool } = require("pg");

// const pool = new Pool({
//   connectionString: process.env.POSTGRES_URL,
// });

// pool.connect((err) => {
//   if (err) throw err;
//   console.log("Connected to PostgreQL successfully!");
// });

// module.exports = pool;
const { Client } = require("pg");

const database = new Client({
  user: "postgres",
  host: "localhost",
  database: "TestDB",
  password: "258692",
  port: 5432,
});

database.connect((err) => {
  if (err) throw err;
  console.log("Connected to PostgreQL successfully!");
});

module.exports = database;
