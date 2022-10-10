import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todo_list"
});

db.connect((err) => {
  if (err) { throw err; }
  console.log("DB connection OK");
});

export default db;
