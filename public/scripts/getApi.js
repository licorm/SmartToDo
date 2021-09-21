$(() => {

const $submitForm = $(`
<form id="addTask" class="createForm" method="POST" action="/">
      <label class="sr-only">Name</label>
      <input type="text" class="form-control mb-2 mr-sm-2" placeholder="Add Something" id="task" name="task">
      <button type="submit" class="btn btn-primary mb-2">Add</button>
      </form>
  `)
 const results = [];

 const $main = $('#submitform');
 $submitForm.appendTo($main);


 $submitForm.on('submit', function(event) {
  event.preventDefault();


  const data = $(this).parents().children().find('#task').serialize();
  let queryText = data.slice(5)

  const unencode = decodeURI(queryText)
  console.log(unencode)
  if (queryText.includes('watch')) {
    results.push('movie')
    submitTask({
      "task": unencode,
      "category": results[0] });
  } else if (queryText.includes('read')) {
    results.push('book')
    submitTask({
      "task": unencode,
      "category": results[0] });
  } else if (queryText.includes('eat')) {
    results.push('restaurant')
    submitTask({
      "task": unencode,
      "category": results[0] });
  } else if (queryText.includes('buy')) {
    results.push('product')
    submitTask({
      "task": unencode,
      "category": results[0] });
  } else {
    //yelp settings
const yelpSettings = {
	"url": `https://api.yelp.com/v3/businesses/search?term=${queryText}&location=calgary`,
	"method": "GET",
	"headers": {
		"Authorization": "Bearer nxBY2qRdQtx6tQSmpDNElKsuUINdEi_aI_4RDjjvqs3lbzGmgMem__btNaNnT2ruHn28UmFZ1W6Z9zrmjpw0rmyyaEuwGGMc-GSVXD6Q_ffREboy1bP4Po1S6AdGYXYx"
	}
};

// dandelionSettings
const dandelionSettings = {
	"async": true,
	"crossDomain": true,
	"url": `https://api.dandelion.eu/datatxt/nex/v1/?text=${queryText}&include=types%2Cabstract%2Ccategories&token=aa891623e9ff4f11997a4106ecace392`,
	"method": "GET"
};

//wolframSettings
const wolframSettings = {
  "url": `http://api.wolframalpha.com/v2/query?appid=54X4Q5-GJT5YVU638&output=json&input=${queryText}`,

  "method": "GET",
};

const fetchYelp = function() {
  const restaurantResults = [];
 return $.ajax(yelpSettings)
 .then(function (response) {
  let i = 0;
  for (let i = 0; i < response.businesses.length; i++) {
    console.log('i', i);
    restaurantResults.push(response.businesses[i].name)

  }
  for (const element of restaurantResults) {
    let isRestaurant = element.toString();
    if (isRestaurant.includes("'")) {
      isRestaurant = isRestaurant.replace("'", "");
    }
    if (queryText.includes('%20')) {
      queryText = queryText.replaceAll('%20', ' ');
    }
    console.log('isRestaurant', isRestaurant)
    console.log('queryText', queryText)
    if (isRestaurant.toLowerCase() === queryText.toLowerCase()) {
      console.log('i am here')
      results.push('restaurant');
      return results;
    }
  }

    console.log("yelp response:", response);
  })

}



const fetchDandelion = function() {

    let dandelionResults = []
 return $.ajax(dandelionSettings)
  .done(function (response) {

    console.log("Dandelion Response:", response);
    let i = 0;
    while (i < 6) {
      dandelionResults.push(response.annotations[0].categories[i])
      i++
    }
    if (dandelionResults.length > 0) {
      for (const element of dandelionResults) {
        const string = element.toString()
        const isBook = string.includes('novel')
        const isMovie = string.includes('film')
        const isTv = string.includes('television')

        if (isBook) {
          results.push('book')

          return results;
        }
        if (isMovie || isTv) {
          results.push('movie')

          return results;
        }
      }
    }

  })



}

const fetchWolfram = function() {

    return $.ajax(wolframSettings)
  .done(function (response) {
     console.log('wolfram response:', response.queryresult.datatypes)
     const dataType = response.queryresult.datatypes

    if (dataType.toLowerCase() === 'book') {
      results.push('book');
      return results;
    } else if (dataType.toLowerCase() === 'expandedfood' || dataType.toLowerCase() === 'consumerproductspte' || dataType.toLowerCase() === 'product') {
      results.push('product')

      return results;
    } else if (dataType.toLowerCase().includes('movie')) {
       results.push('movie')

       return results;
     }


   })

 }

 const determineCategory = function() {
  return fetchYelp()
   .then(fetchDandelion)
   .catch(error => {
    return;
   })
   .then(fetchWolfram)
   .then(() => {
     if (results.length === 0 || results.length > 1)
     results.push('nocat')
     console.log(results)
     return results;

   })
 }



determineCategory()
.then(() => {
  submitTask({
    "task": unencode,
    "category": results[0] });
})


  }


})






});









