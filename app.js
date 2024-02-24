// use port 3000 unless there exists a preconfigured port
require('dotenv').config();
var port = process.env.PORT || 8080;
const express = require('express');
const app = express();
fs = require('fs');

app.get('/', (req, res) => {
  // Simulating an asynchronous operation
  setTimeout(() => {
    res.write('First response'); // Using res.write() instead of res.send()

    fs.readFile("head.html", function (err, pgres) { 
			if (err) 
				res.write("HEAD.HTML NOT FOUND"); 
			else { 
				// The following 3 lines 
				// are responsible for sending the html file 
				// and ends the response process 
				res.writeHead(200, { 'Content-Type': 'text/html' }); 
				res.write(pgres); 
				res.end(); 
			} 
		}); 

    // Trying to send another response after a delay
    setTimeout(() => {
      res.end('\nSecond response'); // Sending the second response
    }, 1000);
  }, 1000);
});

app.listen(port, () => {
  console.log('Server is running on port 8080');
});
