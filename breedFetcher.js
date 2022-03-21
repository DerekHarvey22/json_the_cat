const request = require("request");

let breed = process.argv[2];


request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  //console.log(typeof body);
  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
})
