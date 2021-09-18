const express = require('express');
const router  = express.Router();
const loginQueries = require('../db/queries/login-queries');

router.get('/:id', (req, res) => {
  loginQueries.userLogin(req.params.id)
    .then((user) => {
      res.json(user);
    })
})

module.exports = router;