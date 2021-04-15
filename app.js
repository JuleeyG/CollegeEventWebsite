// To run use: npx nodemod app.js
// Main server entry point

// Modules
const express = require('express');
const path = require('path');
// Parses incoming request body, when we reciving a form we can grab the data.
const bodyParser = require('body-parser');
// Middleware that allows to make an API request form different domain name.
const cors = require('cors');
const passport = require('passport');
const mysql = require('mysql');
const config = require('./config/database')

const app = express();
const users = require('./routes/users');

var connectionDB = mysql.createConnection(config);

// On Connction or On Error
connectionDB.connect(function(error) {
  if (!!error){
    console.log('Error ' + error);
  } else {
    console.log('Connected');
  }
});

/*
app.get('/', function(req, res) {
  connection.query("SELECT * FROM users", function(error, rows, fields) {
    if (!!error){
      console.log('Error in the query');
    } else {
      console.log('Successful query \n');
      console.log(rows);
    }
  })
});
*/

// Port number
const port = 2425;

// CORS Middleware
app.use(cors());

// Set static Folder
// Place to put our client side files
app.use(express.static(path.join(__dirname, 'public')));

// Body parser Middleware
app.use(bodyParser.json());

// localhost:2424/ ---> users /...
app.use('/users',users);

// Basic route. Index Route
app.get('/', (req, res) => {
  res.send('Invalid endpoint');
})

// calling listen which listens whatever port we passing.
app.listen(port, () => {
  console.log('Server started on port ' + port);
})
