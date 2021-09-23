const express = require('express');
const router = express.Router();

//set querystring to update the category with given info
const queryString = `UPDATE tasks
                     SET  category_type = $1
                     WHERE id = $2`;
const changeCategory = (db) => {
  router.post('/', (req, res) => {

    let values = [req.body.category, req.body.id];

    //send the query to the database
    db.query(`${queryString}`, values)
      .then((response) => {
        res.redirect('/');
      })
      .catch((error) => {
        console.log(error);
      });

  });


  return router;
};

module.exports = changeCategory;
