#!/usr/bin/node
/* eslint-disable */

// Import the 'request' module to make HTTP requests.
const request = require('request');

// Get the URL as a command line argument.
const url = process.argv[2];

// Make an HTTP GET request to the provided URL.
request(url, function (error, response, body) {
    if (error) {
        // If an error occurs during the request, print the error message.
        console.log(error);
    }

    // Create an empty object to store the count of completed tasks for each user.
    const completed = {};

    // Parse the response body as JSON and iterate through the tasks.
    for (const task of JSON.parse(body)) {
        // Check if the task is completed.
        if (task.completed === true) {
            // If the user ID is already in the 'completed' object, increment the count.
            if (completed[task.userId]) {
                completed[task.userId]++;
            } else {
                // If the user ID is not in the 'completed' object, initialize it with a count of 1.
                completed[task.userId] = 1;
            }
        }
    }

    // Print the 'completed' object, which contains the count of completed tasks for each user.
    console.log(completed);
});