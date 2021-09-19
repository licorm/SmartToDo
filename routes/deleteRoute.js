const express = require('express');
const router  = express.Router();

const deleteTask = (db) => {
  router.post('/', (req, res) => {
    const deleteTask = req.body.delete;
    const userId = req.session.user_id;
    db.query(`DELETE FROM tasks
              WHERE user_id = $1 AND name = $2`, [userId, deleteTask])
    .then((response) => {
      console.log(`Deleted: ${deleteTask} from table tasks`);
      res.redirect('/');
    })
    .catch((error) => {
      console.log(error);
    })

  })
  return router;
};

module.exports = deleteTask;