const express = require('express');
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
    const category = req.body.category;
    let categoryString = "Wanting to ";
    console.log(req.body.category.includes('watch'))
    if (req.body.category === 'movie' && !req.body.task.includes('watch')) {
       categoryString += `watch `;
    }
    if (req.body.category === 'book' && !req.body.category.includes('read')) {
      categoryString += `read `;
    }
    if (req.body.category === 'restaurant' && !req.body.category.includes('eat')) {
      categoryString += `eat at `;
    }
    if (req.body.category === 'product' && !req.body.category.includes('buy')) {
      categoryString += `buy `;
    }
    if (req.body.category === 'nocat') {
      categoryString += ``;
    }
    
    db.query(`${queryString}`, [user_id, category, queryText, `${categoryString}${queryText}`])
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
