const express = require('express');
const { yelp, wolfram, dandelion } = require('./api');
const router  = express.Router();
//const fetchApi = require('../public/scripts/getApi');

const queryString = `INSERT INTO tasks(user_id, category_type, name)
                    VALUES ($1, $2, $3) RETURNING *`;
const addTask = (db) => {
  router.post('/', (req, res) => {
    console.log('task', req.body);
    console.log('user_id', 2)
    const user_id = 2;
    const queryText = decodeURI(req.body.task);
    console.log('queryText', queryText)
    let categoryString = "Wanting to ";
    if (req.body.task.includes('watch')) {
       categoryString += `watch `;
       db.query(`${queryString}`, [user_id, 'movie', queryText])
       .then((data) => {
         res.json(data.rows[0]);
         return
       })
    } else if (queryText.includes('read')) {
      categoryString += `read `;
      db.query(`${queryString}`, [user_id, 'book', queryText])
       .then((data) => {
        res.json(data.rows[0]);
       })
    } else if (queryText.includes('eat')) {
      categoryString += `eat at `;
      db.query(`${queryString}`, [user_id, 'restaurant', queryText])
       .then((data) => {
        res.json(data.rows[0]);
       })
    } else if (queryText.includes('buy')) {
      categoryString += `buy `;
      db.query(`${queryString}`, [user_id, 'product', queryText])
       .then((data) => {
        res.json(data.rows[0]);
       })
    } else {
      wolfram(queryText)
      .then((category) => {
        console.log('category', category)
        if (category === 'product') {
          categoryString += 'buy '
          db.query(`${queryString}`, [user_id, category, queryText])
          .then((data) => {
            res.json(data.rows[0]);
          })
        } else if (category === 'movie') {
          categoryString += 'watch '
          db.query(`${queryString}`, [user_id, category, queryText])
          .then((data) => {
            res.json(data.rows[0]);
          })
        } else if (category === 'book') {
          categoryString += 'read '
          db.query(`${queryString}`, [user_id, category, queryText])
          .then((data) => {
            res.json(data.rows[0]);
          })

        }
      })
      yelp(queryText)
      .then((category) => {
        console.log('category', category)
        if (category === 'restaurant') {
          categoryString += 'eat at'
          db.query(`${queryString}`, [user_id, category, queryText])
          .then((data) => {
            res.json(data.rows[0]);
          })
        }
      })
      dandelion(queryText)
      .then((category) => {
        if (category === 'book') {
          db.query(`${queryString}`, [user_id, category, queryText])
          .then((data) => {
          res.json(data.rows[0]);
          })
        } else if (category === 'movie') {
          db.query(`${queryString}`, [user_id, category, queryText])
          .then((data) => {
          res.json(data.rows[0]);
          })
        } 
        if (category === 'nocat') {
          db.query(`${queryString}`, [user_id, category, queryText])
          .then((data) => {
            res.json(data.rows[0]);
          })
        } 

      })
}

    // if (req.body.category === 'nocat') {
    //   categoryString += ``;
    // }

    // db.query(`${queryString}`, [user_id, category, queryText, `${categoryString}${queryText}`])
    // .then((response) => {
    //   res.redirect('/');
    // })
    // .catch((error) => {
    //   console.log(error);
    // })

})

  return router;
}
module.exports = addTask;

