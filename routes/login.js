const { response } = require('express');
const express = require('express');
const router  = express.Router();

const loginRouter = (db) => {
  router.get('/:id', (req, res) => {
    db.query("SELECT * FROM users WHERE id = $1", [req.params.id])
      .then((response) => {
        req.session.user_id = req.params.id;
        res.redirect('/');
      })
  })
  return router
}

module.exports = loginRouter;