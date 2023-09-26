#!/usr/bin/node
/* eslint-disable */

// Import the 'request' module to make HTTP requests.
const request = require('request');

// Import the 'fs' module (File System) to work with files.
const fs = require('fs');

// Get the URL as a command line argument.
const url = process.argv[2];

// Get the desired file name as a command line argument.
const fileName = process.argv[3];

// Create a write stream to save the downloaded data to a file.
const fileStream = fs.createWriteStream(fileName);

// Make an HTTP GET request to the provided URL and pipe the response data to the file stream.
request(url).pipe(fileStream);