const axios = require('axios');
const { response } = require('express');

const yelp = async function(queryText) {
  console.log('queryText', queryText)

  let results = "nocat";
  let response = await axios
  .get(`https://api.yelp.com/v3/businesses/search?term=${queryText}&location=calgary`,
    {
      headers: {
        Authorization: "Bearer nxBY2qRdQtx6tQSmpDNElKsuUINdEi_aI_4RDjjvqs3lbzGmgMem__btNaNnT2ruHn28UmFZ1W6Z9zrmjpw0rmyyaEuwGGMc-GSVXD6Q_ffREboy1bP4Po1S6AdGYXYx"
    }
  })
  .then((response) => {
    const restaurantResults = [];
    let i = 0;
    for (let i = 0; i < response.data.businesses.length; i++) {
      restaurantResults.push(response.data.businesses[i].name)

    }
    for (const element of restaurantResults) {
      let isRestaurant = element.toString();
      if (isRestaurant.includes("'")) {
        isRestaurant = isRestaurant.replace("'", "");
      }

      if (isRestaurant.toLowerCase() === queryText.toLowerCase()) {
        results = 'restaurant'
        break
      }
    }
    })

    return results;
};

const wolfram = async function(queryText) {
  let results = "";

  let response = await axios
  .get(`http://api.wolframalpha.com/v2/query?appid=54X4Q5-GJT5YVU638&output=json&input=${queryText}`)
  .then(function (response) {
    const dataType = response.data.queryresult.datatypes;
    if (dataType === 'Book') {
      results = 'book';
    } else if (dataType=== 'ExpandedFood' || dataType === 'ConsumerProductsPTE' || dataType.toLowerCase() === 'Product') {
      results = 'products'
    } else if (dataType.toLowerCase().includes('movie') || dataType === 'TelevisionProgram') {
      results = 'movie'
    }

  })
  return results;
};

module.exports = {
  yelp,
  wolfram
}
