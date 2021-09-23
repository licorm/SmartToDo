// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const sass       = require("node-sass-middleware");
const app        = express();
const morgan     = require('morgan');
const cookieSession = require('cookie-session');


// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))



// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
// Mount all resource routes
const loginRouter = require('./routes/login');
const addRoute = require('./routes/addRoute');
const deleteRoute = require('./routes/deleteRoute');
const getTasks = require('./routes/getTasks');
const completeTask = require('./routes/completeTask');
const changeCategory = require('./routes/changeCategory');

// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
// Note: mount other resources here, using the same pattern above
app.use('/login', loginRouter(db))
app.use('/', addRoute(db));
app.use('/delete', deleteRoute(db));


app.use('/completetask', completeTask(db));
app.use('/tasks', getTasks(db)); // Add a route for tasks from databade
app.use('/changeCategory', changeCategory(db));


// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  res.render("index");
  console.log('req.params', req.params)
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
