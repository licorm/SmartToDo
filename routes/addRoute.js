const express = require('express');
const { yelp, wolfram, dandelion } = require('./api');
const router  = express.Router();

const queryString = `INSERT INTO tasks(user_id, category_type, name)
                    VALUES ($1, $2, $3) RETURNING *`;
const addTask = (db) => {
  router.post('/', (req, res) => {
    console.log('task', req.body);
    console.log('user_id', 2);
    const user_id = 2;
    const queryText = decodeURI(req.body.task);
    console.log('queryText', queryText);
    if (req.body.task.includes('watch')) {
      db.query(`${queryString}`, [user_id, 'movie', queryText])
        .then((data) => {
          res.json(data.rows[0]);
          return;
        });
    } else if (queryText.includes('read')) {
      db.query(`${queryString}`, [user_id, 'book', queryText])
        .then((data) => {
          res.json(data.rows[0]);
        });
    } else if (queryText.includes('eat')) {
      db.query(`${queryString}`, [user_id, 'restaurant', queryText])
        .then((data) => {
          res.json(data.rows[0]);
        });
    } else if (queryText.includes('buy')) {
      db.query(`${queryString}`, [user_id, 'product', queryText])
        .then((data) => {
          res.json(data.rows[0]);
        });
    } else {
      wolfram(queryText)
        .then((category) => {
          if (category === 'product') {
            db.query(`${queryString}`, [user_id, category, queryText])
              .then((data) => {
                res.json(data.rows[0]);
              });
          } else if (category === 'movie') {
            db.query(`${queryString}`, [user_id, category, queryText])
              .then((data) => {
                res.json(data.rows[0]);
              });
          } else if (category === 'book') {
            db.query(`${queryString}`, [user_id, category, queryText])
              .then((data) => {
                res.json(data.rows[0]);
              });
          }
        })
        .catch((error) => {
          console.log('Wolfram: Could not find what you were searching for.');
        });
      yelp(queryText)
        .then((category) => {
          console.log('category', category);
          if (category === 'restaurant') {
            db.query(`${queryString}`, [user_id, category, queryText])
              .then((data) => {
                res.json(data.rows[0]);
              });
          }
        })
        .catch((error) => {
          console.log('Yelp: Could not find what you were searching for.');
        });
      dandelion(queryText)
        .then((category) => {
          if (category === 'book') {
            db.query(`${queryString}`, [user_id, category, queryText])
              .then((data) => {
                res.json(data.rows[0]);
              });
          } else if (category === 'movie') {
            db.query(`${queryString}`, [user_id, category, queryText])
              .then((data) => {
                res.json(data.rows[0]);
              });
          }
          if (category === 'nocat') {
            db.query(`${queryString}`, [user_id, category, queryText])
              .then((data) => {
                res.json(data.rows[0]);
              });
          }
        })
        .catch((error) => {
          console.log('Dandelion: Could not find what you were searching for.');
        });
    }
  });
  return router;
};
module.exports = addTask;

