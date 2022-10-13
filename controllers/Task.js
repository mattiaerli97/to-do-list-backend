import db from '../config.js'

export const getAllTasks = async (req, res) => {
  let query = "SELECT * FROM tasks"
  let order = "ASC"

  if (req.query && req.query.orderBy) {
    query = `${query} ORDER BY ${req.query.orderBy} ${req.query && req.query.order ? req.query.order : order}`
  }

  if (req.query && req.query.hideDone && req.query.hideDone === "true") {
    query = `${query} WHERE done = 0`
  }

  db.query(query, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
}

export const getTaskById = async (req, res) => {
  db.query("SELECT * FROM tasks WHERE id = ?", [req.params.id], function (err, result) {
    if (err) throw err;
    res.json(result.length > 0 ? result[0] : result);
  });
}

export const createTask = async (req, res) => {
  db.query("INSERT INTO tasks (content, urgency) VALUES (?, ?)", [req.body.content, req.body.urgency], function (err, result) {
    if (err) throw err;
    res.json(result);
  });
}

export const updateTask = async (req, res) => {
  db.query("UPDATE tasks SET content = ?, urgency = ? WHERE id = ?", [req.body.content, req.body.urgency, req.params.id], function (err, result) {
    if (err) throw err;
    res.json(result);
  });
}

export const updateDoneTask = async (req, res) => {
  db.query("UPDATE tasks SET done = ? WHERE id = ?", [req.body.done, req.params.id], function (err, result) {
    if (err) throw err;
    res.json(result);
  });
}
