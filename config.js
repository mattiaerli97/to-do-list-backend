import mysql from "mysql2";

const db = mysql.createConnection({
  host: "sql8.freesqldatabase.com",
  user: "sql8527201",
  password: "5uBzFyPAsT",
  database: "sql8527201"
});

db.connect((err) => {
  if (err) { throw err; }
  console.log("DB connection OK");
});

export default db;
