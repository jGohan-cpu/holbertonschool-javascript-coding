#!/usr/bin/node

// Import the 'request' module to make HTTP requests
const request = require('request');

// Send an HTTP GET request to the URL specified as a command-line argument
request(process.argv[2], function (_err, res) {
    // Check if a response was received
    if (res) {
        // Print the response status code to the console
        console.log('code:', res.statusCode);
    }
});
