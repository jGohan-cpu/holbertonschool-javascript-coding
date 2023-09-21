#!/usr/bin/node

// Import the 'request' module to make HTTP requests
const request = require('request');

// Send an HTTP GET request to the URL specified as a command-line argument
request(process.argv[2], function (err, _res, body) {
    // Check if an error occurred while making the request
    if (err) {
        console.log(err); // Print the error message to the console
    } else {
        // Initialize an object to store completed tasks by users
        const completedTasksByUsers = {};

        // Parse the JSON response body into a JavaScript object
        body = JSON.parse(body);

        // Iterate through the tasks in the response
        for (let i = 0; i < body.length; ++i) {
            const userId = body[i].userId;
            const completed = body[i].completed;

            // Check if the task is completed and the user's entry exists in the object
            if (completed && !completedTasksByUsers[userId]) {
                completedTasksByUsers[userId] = 0; // Initialize the count to 0
            }

            // If the task is completed, increment the count for the user
            if (completed) {
                ++completedTasksByUsers[userId];
            }
        }

        // Print the object containing completed tasks by users
        console.log(completedTasksByUsers);
    }
});
