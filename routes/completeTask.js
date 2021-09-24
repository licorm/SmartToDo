const express = require('express');
const router = express.Router();

//querystring to update completed to the oposite of what is it
const queryString = `UPDATE tasks
                     SET completed = NOT completed
                     WHERE id = $1`;
const completeTask = (db) => {
  router.post('/', (req, res) => {

    const values = [req.body.id];

    db.query(`${queryString}`, values)
      .then((response) => {
        res.redirect('/');
      })
      .catch((error) => {
        console.log(error);
      });

  });

  return router;
};

module.exports = completeTask;
