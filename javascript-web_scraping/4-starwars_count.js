#!/usr/bin/node
/* eslint-disable */

// Import the 'request' module to make HTTP requests.
const request = require('request');

// Get the URL as a command line argument.
const url = process.argv[2];

// Make an HTTP GET request to the provided URL.
request(url, function (err, response, body) {
    if (err) {
        // If an error occurs during the request, print the error message.
        console.log(err);
    }

    // Initialize a count variable to keep track of the occurrences of character 18.
    let count = 0;

    // Parse the response body as JSON and iterate through the 'results' array.
    for (const result of JSON.parse(body).results) {
        // Iterate through the 'characters' array in each 'result'.
        for (const wedgeUrl of result.characters) {
            // Check if the 'wedgeUrl' includes the character ID 18.
            if (wedgeUrl.includes(18)) {
                // If character 18 is found, increment the count.
                count++;
            }
        }
    }

    // Print the count of occurrences of character 18.
    console.log(count);
});
