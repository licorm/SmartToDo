//functions for determining category
const queryText = 'Cactus Club'
const results = [];

//restaurant check
const restaurantResults = [];


//function determines restaurant result
const restaurantArray = function(response) {
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
}

module.exports = {
  restaurantArray
}
