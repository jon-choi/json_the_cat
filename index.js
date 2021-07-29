const { fetchBreedDescription } = require('./breedFetcher');

const breed = process.argv[2];

fetchBreedDescription(breed, (error, description) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(description);
  }
});