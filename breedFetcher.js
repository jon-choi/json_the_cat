const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(url, (error, response, body) => {
  
    if (error) {
      callback('Error: request failed', null);
    }
  
    if (response.statusCode !== 200) {
      callback(`Error ${response.statusCode}: Sorry, the page you requested was not found`, null);
      return;
    }
  
    const data = JSON.parse(body);
  
    if (!data[0]) {
      callback("Sorry, we couldn't find the breed you were looking for.", null);
      return;
    }

  
    callback(null, `description: ${data[0]['description']}`);
  });

};

module.exports = {fetchBreedDescription};