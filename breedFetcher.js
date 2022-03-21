const request = require("request");

let breed = process.argv[2];


request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
// edge case if there is an error
  if (error) {
    console.log(error);
    return;
  }
  //console.log(typeof body);
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("We were unable to find the breed that you requested. Please double check for typos!");
  } else {
    console.log(data[0].description);
  }
});
