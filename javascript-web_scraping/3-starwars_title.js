#!/usr/bin/node
/* eslint-disable */

// Import the 'request' module to make HTTP requests.
const request = require('request');

// Get the film ID as a command line argument.
const id = process.argv[2];

// Construct the URL based on the provided film ID.
const url = `https://swapi-api.hbtn.io/api/films/${id}`;

// Make an HTTP GET request to the constructed URL.
request(url, function (err, response, body) {
    if (err) {
        // If an error occurs during the request, print the error message.
        console.log(err);
    }
    // Parse the response body as JSON and print the 'title' property.
    console.log(JSON.parse(body).title);
});