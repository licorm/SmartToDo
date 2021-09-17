# User stories
user
user preferences
check things off(finished/not finished)

adding/sorting

check things off

User Stories
A user story describes how users will interact with your application
They have the form: As a ___, I want to _, because ____.

As a user, I can added item to list, because I want to do it AND it will automatically be sorted.
As a user, I can change the sorting, because it wasn't what I intended.
As a user, I can update my profile, because I want to change my preferences.
As a user, I want to mark task as completed, so I can keep track.
As a user, I can delete task, because I no longer want to do them

users id, username, email, password
tasks , id, user_id, name, complete, description
preferences id, 
category id, user_id, pref_id, movie, book, products, restaurants, music ?

ROOTS:

GET     /user
GET     /user/:id
PATCH   /user/:id
POST    /user/
DELETE  /user/:id

MVD:

self categorizing,
changing the catagory
deleting task
changing preferences and how that chagnes the catagory selection

LOGIN:
// do this instead
app.get('/login/:id', (req, res) => {
  // cookie-session
  req.session.user_id = req.params.id;

  // cookie-parser
  res.cookie('user_id', req.params.id);

  // redirect the client
  res.redirect('/');

});

POSSIBLE API:
google
wolfram alpha
rotten tomatoes
amazon
yelp
spotify
the sports db
the audio db

