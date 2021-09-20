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
    const categoryString = "";

    if (req.body.category === 'movie') {
       categoryString += `watch ${category}`;
    }
    if (req.body.category === 'book') {
      categoryString += `read ${category}`;
    }
    if (req.body.category === 'restaurant') {
      categoryString += `eat at ${category}`;
    }
    if (req.body.category === 'product') {
      categoryString += `buy ${category}`;
    }
    if (req.body.category === 'nocat') {
      categoryString += `${category}`;
    }

    db.query(`${queryString}`, [user_id, categoryString, queryText, `${description} ${queryText}`])
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
