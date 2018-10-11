const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode');

const argv = yargs
  .options({
    address: {
      demand: true,
      alias: 'a',
      describe: 'Address to fetch weather for'
      // string: true //parses argument as a string
    }
  })
  .help()
  .alias('help', 'h') // two arguments, argument, alias
  .argv; // takes config, runs it through args, then restores the result in the argv variable

//Two arguments, errorMessage, which will be a string, and results, which will contain the address, the latitude, and the longitude
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(results, undefined, 2));
  }
});

// EXPLANATION
// we are calling geocodeAddress that is in the file geocode.js and this takes two arguments, address and a callback function (will return two arguments)
// the geocodeAddress will fetch some dara with the address then when the data is fetched, it will make a call to the callback function
// and pass some of the data fetched as an argument, or something else.
// once that call is made in the geocode.js, it will return to the app.js and execute the function inside geocode.geocodeAddress with the
// parameters either errorMessage, or results. Depending of what was sent from geocode.js
// then it will do something with that data.
// ALL OF THIS IS ASYNC