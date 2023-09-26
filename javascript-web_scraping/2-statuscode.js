#!/usr/bin/node
/* eslint-disable */

// Import the 'request' module to make HTTP requests.
const request = require('request');

// Get the URL as a command line argument.
const url = process.argv[2];

// Make an HTTP GET request to the specified URL.
// The 'request.get(url)' function initiates the GET request.
// 'on('response', function (response) { ... })' sets up an event handler
// to handle the response when it's received.
request.get(url).on('response', function (response) {
    // Print the status code of the HTTP response.
    console.log(`code: ${response.statusCode}`);
});
