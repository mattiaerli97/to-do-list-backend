import mysql from "mysql2";

const db = mysql.createConnection({
  host: "sql8.freesqldatabase.com",
  user: "sql8525571",
  password: "vAYxz6uK8v",
  database: "sql8525571"
});

db.connect((err) => {
  if (err) { throw err; }
  console.log("DB connection OK");
});

export default db;
