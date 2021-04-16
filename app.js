// To run use: npx nodemod app.js
// Main server entry point

// Modules
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
// Parses incoming request body, when we reciving a form we can grab the data.
const bodyParser = require('body-parser');
// Middleware that allows to make an API request form different domain name.
// const cors = require('cors');
// const passport = require('passport');
const db = require('./config/database')

// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error ' + err))

const app = express();

// handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// User routes
app.use('/users', require('./routes/users'));

app.get('/', (req, res) => res.send('INDEX'));

// Port number
const PORT = process.env.PORT || 5001;

app.listen(PORT, console.log('Server started on port ' + PORT));


/*
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
*/
