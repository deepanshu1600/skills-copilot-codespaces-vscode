//Create web server
const express = require('express');
const app = express();

//Create a route handler
app.get('/comments', (req, res) => {
  res.send('This is a page of comments');
});

//Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000. Ready to accept requests!');
});