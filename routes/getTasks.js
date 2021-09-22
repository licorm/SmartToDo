// The get route to insert tasks to task category from the database

const express = require('express');
const router  = express.Router();

const getTasks = (db) => {
  router.get("/", (req, res) => {
    let query = `SELECT * FROM tasks ORDER BY id`;
    db.query(query)
      .then(data => {
        const categoties = data.rows;
        res.json(categoties);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;

};

module.exports = getTasks;
