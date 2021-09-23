const axios = require('axios');

const yelp = async function(queryText) {
  console.log('queryText', queryText);

  let results = "";

  let response = await axios
    .get(`https://api.yelp.com/v3/businesses/search?term=${queryText}&location=vancouver`,
      {
        headers: {
          Authorization: "Bearer nxBY2qRdQtx6tQSmpDNElKsuUINdEi_aI_4RDjjvqs3lbzGmgMem__btNaNnT2ruHn28UmFZ1W6Z9zrmjpw0rmyyaEuwGGMc-GSVXD6Q_ffREboy1bP4Po1S6AdGYXYx"
        }
      })
    .then((response) => {
      const restaurantResults = [];
      for (let i = 0; i < response.data.businesses.length; i++) {
        restaurantResults.push(response.data.businesses[i].name);

      }
      for (const element of restaurantResults) {
        let isRestaurant = element.toString();
        if (isRestaurant.includes("'")) {
          isRestaurant = isRestaurant.replace("'", "");
        }

        if (isRestaurant.toLowerCase() === queryText.toLowerCase()) {
          results = 'restaurant';
          break;
        }
      }
    });

  return results;
};

const wolfram = async function(queryText) {
  let results = "nocat";

  let response = await axios
    .get(`http://api.wolframalpha.com/v2/query?appid=54X4Q5-GJT5YVU638&output=json&input=${queryText}`)
    .then((response) => {
      const dataType = response.data.queryresult.datatypes;
      if (dataType === 'Book') {
        results = 'book';
      } else if (dataType === 'ExpandedFood' || dataType === 'ConsumerProductsPTE' || dataType.toLowerCase() === 'Product') {
        results = 'product';
      } else if (dataType.toLowerCase().includes('movie') || dataType === 'TelevisionProgram') {
        results = 'movie';
      }

    });
  return results;
};


const dandelion = async function(queryText) {
  const dandelionResults = [];
  let response = await axios
    .get(`https://api.dandelion.eu/datatxt/nex/v1/?text=${queryText}&include=types%2Cabstract%2Ccategories&token=aa891623e9ff4f11997a4106ecace392`)
    .then((response) => {
      if (response.data.annotations.length > 0) {
        let i = 0;
        while (i < 6) {
          dandelionResults.push(response.data.annotations[0].categories[i]);
          i++;
        }
        if (dandelionResults.length > 0) {
          for (const element of dandelionResults) {
            if (element.includes('novel')) {
              results = 'book';
              return results;
            }
            if (element.includes('film') || element.includes('television')) {
              results = 'movie';
              return results;
            }
          }
        }
      }

    });
  return results;
};

module.exports = {
  yelp,
  wolfram,
  dandelion
};