const { fetchMovies } = require('./getApi');

fetchMovies((error, body) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log(body)

});
