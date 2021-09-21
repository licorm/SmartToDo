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
