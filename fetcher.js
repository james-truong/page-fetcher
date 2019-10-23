const request = require('request');
var fs = require('fs');
args = process.argv;

//Implement a small command line node app called fetcher.js which should take a URL as a 
//command-line argument as well 
//as a local file path and download the resource to the specified path.
request(args[2], (error, response, body) => {
  fs.writeFile(args[3], body, function (err) {
    if (err) throw err;
    console.log('Saved ' + body.length + 'bytes on ' + args[3]);
    
  });
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
});
