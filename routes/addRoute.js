const express = require('express');
const { yelp, wolfram } = require('./api');
const router  = express.Router();
//const fetchApi = require('../public/scripts/getApi');

const queryString = `INSERT INTO tasks(user_id, category_type, name, description)
                    VALUES ($1, $2, $3, $4)`;
const addTask = (db) => {
  router.post('/', (req, res) => {
    console.log('task', req.body);
    console.log('user_id', req.session.user_id)
    const user_id = req.session.user_id;
    const queryText = req.body.task;
    console.log('queryText', queryText)
    let categoryString = "Wanting to ";
    if (req.body.task.includes('watch')) {
       categoryString += `watch `;
       db.query(`${queryString}`, [user_id, 'watch', queryText, `${categoryString}${queryText}`])
       .then((data) => {
         res.json(data);
       })
    } else if (queryText.includes('read')) {
      categoryString += `read `;
      db.query(`${queryString}`, [user_id, 'read', queryText, `${categoryString}${queryText}`])
       .then((data) => {
         res.json(data);
       })
    } else if (queryText.includes('eat')) {
      categoryString += `eat at `;
      db.query(`${queryString}`, [user_id, 'eat', queryText, `${categoryString}${queryText}`])
       .then((data) => {
         res.json(data);
       })
    } else if (queryText.includes('buy')) {
      categoryString += `buy `;
      db.query(`${queryString}`, [user_id, 'products', queryText, `${categoryString}${queryText}`])
       .then((data) => {
         res.json(data);
       })
    } else {
      wolfram(queryText)
      .then((category) => {
        console.log('category', category)
        if (category === 'products') {
          categoryString += 'buy '
          db.query(`${queryString}`, [user_id, category, queryText, `${categoryString}${queryText}`])
          .then((data) => {
            res.redirect('/');
          })
        } else if (category === 'movie') {
          categoryString += 'watch '
          db.query(`${queryString}`, [user_id, category, queryText, `${categoryString}${queryText}`])
          .then((data) => {
            res.redirect('/');
          })
        } else if (category === 'book') {
          categoryString += 'read '
          db.query(`${queryString}`, [user_id, category, queryText, `${categoryString}${queryText}`])
          .then((data) => {
            res.redirect('/');
          })
        } else {
        yelp(queryText)
        .then((category) => {
          console.log('category', category)
          if (category === 'restaurant') {
            categoryString += 'eat at'
            db.query(`${queryString}`, [user_id, category, queryText, `${categoryString}${queryText}`])
            .then((data) => {
              res.redirect('/');
            })
          }
          if (category === 'nocat') {
            db.query(`${queryString}`, [user_id, category, queryText, `${categoryString}${queryText}`])
            .then((data) => {
              res.redirect('/');
            })
          } 
          
        })
      }
      })
    }
  })
  
  return router;
}
module.exports = addTask;
