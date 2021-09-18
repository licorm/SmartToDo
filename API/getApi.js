
$document.ready(() => {


  const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-movies-by-title&title=matrix",
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
      "x-rapidapi-key": "85cb3c3da5msh1736a5f390ea368p159ccejsn0b9cde09d29b"
    }
  };
  const fetchMovies = function() {
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  }
  fetchMovies();
  module.exports = { fetchMovies };
})







