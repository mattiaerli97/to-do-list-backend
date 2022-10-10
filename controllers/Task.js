import db from '../config.js'

export const getAllTasks = async (req, res) => {
  db.query("SELECT * FROM tasks", function (err, result) {
    if (err) throw err;
    res.json(result);
  });
}
