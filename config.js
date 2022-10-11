import mysql from "mysql2";

const db = mysql.createConnection({
  host: "sql303.epizy.com",
  user: "epiz_32770718",
  password: "Esazavaj22",
  database: "epiz_32770718_todo_list"
});

db.connect((err) => {
  if (err) { throw err; }
  console.log("DB connection OK");
});

export default db;
