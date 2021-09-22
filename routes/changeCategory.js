const express = require('express');
const router  = express.Router();
//const fetchApi = require('../public/scripts/getApi');

const queryString = `UPDATE tasks
                     SET  category_type = $1
                     WHERE id = $2`;
const changeCategory = (db) => {
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

module.exports = changeCategory;
