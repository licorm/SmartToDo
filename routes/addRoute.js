const express = require('express');
const router  = express.Router();

const queryString = `INSERT INTO tasks(user_id, category_type, name, description)
                    VALUES ($1, $2, $3, $4)`;
const description = 'Wanting to ';
const addTask = (db) => {
  router.post('/', (req, res) => {
    const user_id = req.body.user_id;
    const queryText = req.body.text;
    if (queryText.includes('watch')) {
      db.query(`${queryString}`, (user_id, 'movie', queryText, `${description} ${queryText}`))
    }
    if (queryText.includes('eat')) {
      db.query(`${queryString}`, (user_id, 'eat', queryText, `${description} ${queryText}`))
    }
    if (queryText.includes('read')) {
      db.query(`${queryString}`, (user_id, 'read', queryText, `${description} ${queryText}`))
    }
    if (queryText.includes('buy')) {
      db.query(`${queryString}`, (user_id, 'buy', queryText, `${description} ${queryText}`))
    }
  })
}

module.exports = addRoute;