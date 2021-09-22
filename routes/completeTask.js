const express = require('express');
const router  = express.Router();
//const fetchApi = require('../public/scripts/getApi');

const queryString = `UPDATE tasks
                     SET completed = true
                     WHERE id = $1`;
const completeTask = (db) => {
  router.post('/', (req, res) => {
   console.log(req.body.id)
   const values = [req.body.id];

    db.query(`${queryString}`, values)
    .then((response) => {
      res.redirect('/');
    })
    .catch((error) => {
      console.log(error);
    })

  })


  return router;
}

module.exports = completeTask;
