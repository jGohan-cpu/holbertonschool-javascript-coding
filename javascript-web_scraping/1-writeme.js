#!/usr/bin/node
/* eslint-disable */

// Import the 'fs' module (File System) to work with files.
const fs = require('fs');

// Get the file path as the first command line argument.
const filePath = process.argv[2];

// Get the text data to be written as the second command line argument.
const textData = process.argv[3];

// Write the 'textData' to the file specified by 'filePath' as UTF-8.
// The 'utf-8' encoding specifies that the textData should be written as text.
fs.writeFile(filePath, textData, 'utf-8', function (err) {
    if (err) {
        // If an error occurs while writing to the file, print the error message.
        console.log(err);
    }
});

