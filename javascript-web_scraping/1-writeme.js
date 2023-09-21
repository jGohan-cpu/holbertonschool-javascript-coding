#!/usr/bin/node

// Import the 'fs' (file system) module to work with files
const fs = require('fs');

// Retrieve the file path and content from command-line arguments
// 'process.argv[2]' is the third argument, which should be the file path
// 'process.argv[3]' is the fourth argument, which should be the content to write
const filePath = process.argv[2];
const content = process.argv[3];

// Use 'fs.writeFile' to write the specified content to the specified file
// 'utf8' specifies the encoding of the content (UTF-8)
// The provided callback function will be executed when the file is written
fs.writeFile(filePath, content, 'utf8', function (err) {
    // Check if an error occurred while writing the file
    if (err) {
        console.log(err); // Print the error message to the console
    }
});
