const express = require('express');
const router  = express.Router();
const fetchApi = require('../public/scripts/getApi');

const queryString = `INSERT INTO tasks(user_id, category_type, name, description)
                    VALUES ($1, $2, $3, $4)`;
const description = 'Wanting to ';
const addTask = (db) => {
  router.post('/', (req, res) => {
    console.log('task', req.body.task);
    console.log('user_id', req.session.user_id)
    const user_id = req.session.user_id;
    const queryText = req.body.task;

    if (queryText.includes('watch')) {
      db.query(`${queryString}`, [user_id, 'movie', queryText, `${description} ${queryText}`])
      .then((response) => {
        res.redirect('/');
      })
      .catch((error) => {
        console.log(error);
      })
    }
    if (queryText.includes('read')) {
      db.query(`${queryString}`, [user_id, 'book', queryText, `${description} ${queryText}`])
      .then((response) => {
        res.redirect('/');
      })
      .catch((error) => {
        console.log(error);
      })
    }
    if (queryText.includes('eat')) {
      db.query(`${queryString}`, [user_id, 'restaurant', queryText, `${description} ${queryText}`])
      .then((response) => {
        res.redirect('/');
      })
      .catch((error) => {
        console.log(error);
      })
    }
    if (queryText.includes('buy')) {
      db.query(`${queryString}`, [user_id, 'products', queryText, `${description} ${queryText}`])
      .then((response) => {
        res.redirect('/');
      })
      .catch((error) => {
        console.log(error);
      })
    }
    const category = fetchApi(queryText);
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
