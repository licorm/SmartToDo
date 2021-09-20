const express = require('express');
const router  = express.Router();
//const fetchApi = require('../public/scripts/getApi');

const queryString = `INSERT INTO tasks(user_id, category_type, name, description)
                    VALUES ($1, $2, $3, $4)`;
const description = 'Wanting to ';
const addTask = (db) => {
  router.post('/', (req, res) => {
    console.log('task', req.body);
    console.log('user_id', req.session.user_id)
    const user_id = req.session.user_id;
    const queryText = req.body.task;
    const category = req.body.category;



    console.log('category', category);

    db.query(`${queryString}`, [user_id, category, queryText, `${description} ${queryText}`])
    .then((response) => {
      res.redirect('/');
    })
    .catch((error) => {
      console.log(error);
    })

  })


  return router;
}

module.exports = addTask;
