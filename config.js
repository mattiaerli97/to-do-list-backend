import mysql from "mysql2";

const db = mysql.createConnection({
  host: "sql.freedb.tech",
  user: "freedb_sql8525571",
  password: "sVQDX@K6eJ3W@2k",
  database: "freedb_todo_list"
});

db.connect((err) => {
  if (err) { throw err; }
  console.log("DB connection OK");
});

export default db;
