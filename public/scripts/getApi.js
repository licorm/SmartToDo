$(() => {

const queryText = 'Cactus Club'
const results = [];


//yelp API
const yelpSettings = {
	"url": `https://api.yelp.com/v3/businesses/search?term=${queryText}&location=calgary`,
	"method": "GET",
	"headers": {
		"Authorization": "Bearer nxBY2qRdQtx6tQSmpDNElKsuUINdEi_aI_4RDjjvqs3lbzGmgMem__btNaNnT2ruHn28UmFZ1W6Z9zrmjpw0rmyyaEuwGGMc-GSVXD6Q_ffREboy1bP4Po1S6AdGYXYx"
	}
};

const restaurantResults = [];

 $.ajax(yelpSettings).done(function (response) {

    console.log("yelp response:", response);
  })
  .then((response) => {
    let i = 0;
  while (i < 6) {
    restaurantResults.push(response.businesses[i].name)
    i++
  }
  for (const element of restaurantResults) {

    const string = element.toString()
    const isRestaurant = string.includes(queryText)

    if (isRestaurant) {
      results.push('restaurant')
      return results;
    }
  }
  })






// //checks to see if restaurant name matches
// const isRestaurant = function(array) {
//   if (array.includes(queryText)) {
//     results.push('restaurant')
//     return;
//   }
//   return false;
// }


// dandelionSettings
const dandelionSettings = {
	"async": true,
	"crossDomain": true,
	"url": `https://api.dandelion.eu/datatxt/nex/v1/?text=${queryText}&include=types%2Cabstract%2Ccategories&token=aa891623e9ff4f11997a4106ecace392`,
	"method": "GET",
};

let dandelionResults = []

$.ajax(dandelionSettings).done(function (response) {


	console.log("Dandelion Response:", response.annotations[0].categories);

})
.then((response) => {
  let i = 0;
  while (i < 6) {
    dandelionResults.push(response.annotations[0].categories[i])
    i++
  }
  for (const element of dandelionResults) {
    const string = element.toString()
    const isBook = string.includes('novel')
    const isMovie = string.includes('film')
    if (isBook) {
      results.push('book')
      return;
    }
    if (isMovie) {
      results.push('movie')
      return
    }
  }
  return false;
})




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

//checks if exists as movie
// const isMovie = function(array) {
//   if (array) {

//   }
// }



// //groceries API
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

// //wolfram api

// // const search = ""

  const wolframSettings = {
    "url": `http://api.wolframalpha.com/v2/query?appid=54X4Q5-GJT5YVU638&output=json&input=${queryText}`,

    "method": "GET",
  };


$.ajax(wolframSettings).done(function (response) {
  console.log('wolfram response:', response.queryresult.datatypes)
})
.then((response) => {
  const dataType = response.queryresult.datatypes
    if (dataType.toLowerCase() === 'expandedfood' || dataType.toLowerCase() === 'ConsumerProductsPTE') {
    return results.push('product')
  }
})









console.log('RESULT TO LOOK AT', results)




});






