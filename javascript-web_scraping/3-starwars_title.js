#!/usr/bin/node

// Import the 'request' module to make HTTP requests
const request = require('request');

// Construct the URL for the Star Wars API by concatenating the base URL and the film ID
const starWarsUri = 'https://swapi-api.hbtn.io/api/films/'.concat(process.argv[2]);

// Send an HTTP GET request to the constructed URL
request(starWarsUri, function (_err, _res, body) {
    // Parse the JSON response body into a JavaScript object
    body = JSON.parse(body);

    // Print the title of the film from the parsed response object
    console.log(body.title);
});
