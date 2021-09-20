

$(() => {

const $submitForm = $(`
  <body>
    <h1>Hello World!</h1>
    <div>
      <form method="POST" action="/">
        <label for="addTasks">add new task:</label><br>
        <input type="text" id="task" name="task"><br>
        <input type="submit" value="submit">
      </form>
      <form method="POST" action="/delete">
        <label for="deleteTasks">delete task:</label><br>
        <input type="text" id="deleteTask" name="delete" value="Harry Potter"><br>
        <input type="submit" value="delete">
      </form>
    </div>
  </body>
  `)
 const results = [];

 const $main = $('#main-content');
 $submitForm.appendTo($main);



 $submitForm.on('submit', function(event) {
  event.preventDefault();

  const data = $(this).parents().children().find('#task').serialize();
  const queryText = data.slice(5)
  console.log("data:", queryText)
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
 .done(function (response) {

  let i = 0;
  while (i < 6) {
    restaurantResults.push(response.businesses[i].name)
    i++
  }
  for (const element of restaurantResults) {

    const isRestaurant = element.toString()


    if (isRestaurant === queryText) {
      results.push('restaurant');

      return results;
    }
  }

    console.log("yelp response:", response);
  })

}

const failureCallback = (error) => {
  console.log(error)
  return
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
       if (dataType.toLowerCase() === 'expandedfood' || dataType.toLowerCase() === 'ConsumerProductsPTE') {
       results.push('product')

       return results;
     }

     if (dataType.toLowerCase().includes('movie')) {
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

determineCategory();




});




    });









