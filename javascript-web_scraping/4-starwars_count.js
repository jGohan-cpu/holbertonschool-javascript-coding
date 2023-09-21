#!/usr/bin/node

// Import the 'request' module to make HTTP requests
const request = require('request');

// Get the URL for the Star Wars API from the command-line argument
const starWarsUri = process.argv[2];

// Initialize a counter for counting appearances of character ID 18
let times = 0;

// Send an HTTP GET request to the specified Star Wars API URL
request(starWarsUri, function (_err, _res, body) {
    // Parse the JSON response body into a JavaScript object and access the 'results' array
    body = JSON.parse(body).results;

    // Iterate through the films in the 'results' array
    for (let i = 0; i < body.length; ++i) {
        const characters = body[i].characters;

        // Iterate through the characters in each film
        for (let j = 0; j < characters.length; ++j) {
            const character = characters[j];
            const characterId = character.split('/')[5];

            // Check if the character's ID is 18 (indicating character ID 18)
            if (characterId === '18') {
                times += 1; // Increment the appearance count
            }
        }
    }

    // Print the total count of appearances of character ID 18
    console.log(times);
});
