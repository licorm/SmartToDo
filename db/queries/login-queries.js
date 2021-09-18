const { response } = require('express');
const db = require('../../lib/db');

const userLogin = (id) => {
  return db.query('SELECT * FROM users WHERE id = $1' [id])
    .then((response) => {
      return response.rows[0];
    })
};

module.exports = {
  userLogin
};