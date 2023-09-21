#!/usr/bin/node

// Import the 'request' module to make HTTP requests
const request = require('request');

// Import the 'fs' (file system) module to work with files
const fs = require('fs');

// Get the URL to make the HTTP request from the command-line argument
const url = process.argv[2];

// Get the file path to save the response body to from the command-line argument
const filePath = process.argv[3];

// Send an HTTP GET request to the specified URL
request(url, function (_err, _res, body) {
    // Use 'fs.writeFile' to write the response body to the specified file
    // 'utf8' specifies the encoding of the content (UTF-8)
    fs.writeFile(filePath, body, 'utf8', function (err) {
        // Check if an error occurred while writing the file
        if (err) {
            console.log(err); // Print the error message to the console
        }
    });
});
