// use port 3000 unless there exists a preconfigured port
//require('dotenv').config();
//var port = process.env.PORT || 8080;
const express = require('express');
const app = express();

app.get('/example', (req, res) => {
  // Simulating an asynchronous operation
  setTimeout(() => {
    res.write('First response'); // Using res.write() instead of res.send()

    // Trying to send another response after a delay
    setTimeout(() => {
      res.end('Second response'); // Sending the second response
    }, 1000);
  }, 1000);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
