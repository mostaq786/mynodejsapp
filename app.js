var http = require('http'); 
var fs = require('fs'); // to get data from html file 
// use port 3000 unless there exists a preconfigured port
require('dotenv').config();
var port = process.env.PORT || 8080;
//const port = 8080;


http.createServer(function (req, res) { 
	res.writeHead(200, { 'Content-Type': 'text/html' }); 

	// req.url stores the path in the url 
	var url = req.url; 
	if (url === "/") { 
// fs.readFile looks for the HTML file 
// the first parameter is the path to the HTML page 
// the second is the call back function 
// if no file is found the function gives an error 
// if the file is successfully found, the content of the file are contained in pgres 
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
	} 
	else if (url === "/tailPage") { 
		fs.readFile("tail.html", function (err, pgres) { 
			if (err) 
				res.write("TAIL.HTML NOT FOUND"); 
			else { 
				res.writeHead(200, { 'Content-Type': 'text/html' }); 
				res.write(pgres); 
				res.end(); 
			} 
		}); 
	} 
	
}).listen(port, function () { 
	console.log("SERVER STARTED PORT: 8080"); 
}); 
