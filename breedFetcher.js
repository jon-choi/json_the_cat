const request = require('request');

const breed = process.argv[2];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => {
  
  if (error) {
    console.log('Error: request failed');
    console.log(error);
  }

  if (response.statusCode !== 200) {
    console.log(`Error ${response.statusCode}: Sorry, the page you requested was not found`);
    return;
  }

  const data = JSON.parse(body);

  if (!data[0]) {
    console.log("Sorry, we couldn't find the breed you were looking for.");
    return;
  }

  console.log(`description: ${data[0]['description']}`);
});
