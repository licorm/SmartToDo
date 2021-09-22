const express = require('express');
const router  = express.Router();

const deleteTask = (db) => {
  router.post('/', (req, res) => {
    if (req.body.taskId) {
      db.query(`DELETE FROM tasks
                WHERE tasks.id = $1; `, [req.body.taskId])
      .then((response) => {
        console.log(`Deleted: ${req.body.taskId} from table tasks`);
      })
      .catch((error) => {
        console.log(error);
      })
    }
    res.send('ok');
  })
  return router;
};

module.exports = deleteTask;