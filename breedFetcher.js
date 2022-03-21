const request = require("request");




const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    // edge case if there is an error
    if (error) {
      callback(error);
    } else {
      //console.log(typeof body);
      const data = JSON.parse(body);
      if (data.length === 0) {
        error = "We were unable to find the breed that you requested. Please double check for typos!";
        callback(error);
      } else {
        callback(error, data[0].description);
      }
    }
  });
};
module.exports = {fetchBreedDescription};


