#!/usr/bin/node

// Import the 'fs' (file system) module to work with files
const fs = require('fs');

// Use 'fs.readFile' to read the content of the file specified as the command-line argument
// 'process.argv[2]' is the third argument, which is expected to be the filename
// 'utf8' specifies the encoding of the file (UTF-8)
// The provided callback function will be executed when the file is read
fs.readFile(process.argv[2], 'utf8', function (err, data) {
    // Check if an error occurred while reading the file
    if (err) {
        console.log(err); // Print the error message to the console
    } else {
        // If there's no error, write the file's content to the standard output (console)
        process.stdout.write(data);
    }
});
