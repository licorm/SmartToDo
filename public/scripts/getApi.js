
$(() => {

// const title = 'matrix'
// //movies/tv api
// const movieSettings = {
//   "async": true,
//   "crossDomain": true,
//   "url": `https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-movies-by-title&title=${title}`,
//   "method": "GET",
//   "headers": {
//     "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
//     "x-rapidapi-key": "85cb3c3da5msh1736a5f390ea368p159ccejsn0b9cde09d29b"
//   }
// };

// $.ajax(movieSettings).done(function (response) {
//   //consoling the number of search results
//   console.log(response.search_results);
// });

// const food = 'snickers'

// //groceries API
// const grocerySettings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/search?query=${food}&offset=0&number=10&maxCalories=5000&minProtein=0&maxProtein=100&minFat=0&maxFat=100&minCarbs=0&maxCarbs=100&minCalories=0`,
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "85cb3c3da5msh1736a5f390ea368p159ccejsn0b9cde09d29b"
// 	}
// };

// $.ajax(grocerySettings).done(function (response) {
// 	console.log(response);
// });

//amazon api
// const amazonSettings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://amazon24.p.rapidapi.com/api/product?keyword=iphone&country=CA&page=1",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "amazon24.p.rapidapi.com",
// 		"x-rapidapi-key": "85cb3c3da5msh1736a5f390ea368p159ccejsn0b9cde09d29b"
// 	}
// };

// $.ajax(amazonSettings).done(function (response) {
// 	console.log(response);
// });

//yelp API
// const yelpSettings = {
// 	"url": "https://api.yelp.com/v3/businesses/search?term=earls&location=calgary",
// 	"method": "GET",
// 	"headers": {
// 		"Authorization": "Bearer nxBY2qRdQtx6tQSmpDNElKsuUINdEi_aI_4RDjjvqs3lbzGmgMem__btNaNnT2ruHn28UmFZ1W6Z9zrmjpw0rmyyaEuwGGMc-GSVXD6Q_ffREboy1bP4Po1S6AdGYXYx"
// 	}
// };

// $.ajax(yelpSettings).done(function (response) {
//   console.log('it works')
// 	console.log(response);
// });

//google books api
// const bookSettings = {
// 	"url": "https://www.googleapis.com/books/v1/volumes?q=harrypotter&projection=lite&key=AIzaSyDhEMfJfO2c0KBNRG5fF0RYVTwJottooPE",
// 	"method": "GET",
// };

// $.ajax(bookSettings).done(function (response) {
//   console.log('it works')
// 	console.log(response.items[0].volumeInfo.title);
// });

//wolfram api

const search = "Harry Potter and the Philosophers Stone"

const wolframSettings = {
	"url": `http://api.wolframalpha.com/v2/query?appid=54X4Q5-GJT5YVU638&output=json&input=${search}`,
	"method": "GET",
};

$.ajax(wolframSettings).done(function (response) {
  console.log('it works')
	console.log(response.queryresult.datatypes);
  console.log(response.queryresult.assumptions.values[0].name);
});







});







