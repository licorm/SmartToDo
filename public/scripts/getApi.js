
$(() => {

const queryText = 'Desk'
const results = [];
// //movies/tv api
// const movieSettings = {
//   "async": true,
//   "crossDomain": true,
//   "url": `https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-movies-by-title&title=${queryText}`,
//   "method": "GET",
//   "headers": {
//     "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
//     "x-rapidapi-key": "85cb3c3da5msh1736a5f390ea368p159ccejsn0b9cde09d29b"
//   }
// };

// const movieResults = [];

// $.ajax(movieSettings).done(function (response) {
//   //consoling the number of search results
//   let i = 0;
//   while (i < 3) {
//     movieResults.push(response.movie_results[i].title)
//     i++
//   }
//   console.log("movie response:", response);
// });

// //checks if exists as movie
// const isMovie = function(array) {
//   if (array) {

//   }
// }



// // //groceries API
// const grocerySettings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/search?query=${queryText}&offset=0&number=10&maxCalories=5000&minProtein=0&maxProtein=100&minFat=0&maxFat=100&minCarbs=0&maxCarbs=100&minCalories=0`,
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "85cb3c3da5msh1736a5f390ea368p159ccejsn0b9cde09d29b"
// 	}
// };

// $.ajax(grocerySettings).done(function (response) {
//   let i = 0;
//   while (i < 3) {
//     results.push(response.products[i].title)
//     i++
//   }
// 	console.log("grocery response:", response);
// });

// //amazon api
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

// //yelp API
// const yelpSettings = {
// 	"url": `https://api.yelp.com/v3/businesses/search?term=${queryText}&location=calgary`,
// 	"method": "GET",
// 	"headers": {
// 		"Authorization": "Bearer nxBY2qRdQtx6tQSmpDNElKsuUINdEi_aI_4RDjjvqs3lbzGmgMem__btNaNnT2ruHn28UmFZ1W6Z9zrmjpw0rmyyaEuwGGMc-GSVXD6Q_ffREboy1bP4Po1S6AdGYXYx"
// 	}
// };

//  const restaurantResults = [];

// $.ajax(yelpSettings).done(function (response) {
//   let i = 0;
//   while (i < 3) {
//     restaurantResults.push(response.businesses[i].name);
//     i++;
//   }

// 	console.log("yelp response:", response);
// });

// //checks to see if restaurant name matches
// const isRestaurant = function(array) {
//   if (array.includes(queryText)) {
//     return true;
//   }
//   return false;
// }

//console.log(isRestaurant(restaurantResults));

// //google books api

// const bookSettings = {
// 	"url": `https://www.googleapis.com/books/v1/volumes?q=${queryText}&key=AIzaSyDhEMfJfO2c0KBNRG5fF0RYVTwJottooPE`,
// 	"method": "GET",
// };

// $.ajax(bookSettings).done(function (response) {
//   let i = 0;
//   while (i < 3) {
//     if (response.items[i].volumeInfo.title) {
//       results.push(response.items[i].volumeInfo.title)

//     }
//     i++
//   }
// 	console.log("books response:", response);
// });

//wolfram api

// const search = ""

  const wolframSettings = {
    "url": `http://api.wolframalpha.com/v2/query?appid=54X4Q5-GJT5YVU638&output=json&input=${queryText}`,
    "method": "GET",
  };

  $.ajax(wolframSettings).done(function (response) {
    console.log('Wolfram Responses')
    console.log(response.queryresult.datatypes);
    console.log(response);
  });






console.log(results)

});







