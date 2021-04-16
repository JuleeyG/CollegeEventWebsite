const express = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/User');

// Get User list
router.get('/', (req, res) =>
  User.findAll()
    .then(users =>{
      console.log(users);
      res.sendStatus(200);
    })
    .catch(err => console.log(err)));

// Add a user
router.get('/add', (req,res) =>{
  const data = {
    email: 'test2@gmail.com',
    password: 'lalala123',
    firstname: 'Chris',
    lastname: 'Folk',
    university: 'MIT',
    role: 'student'
  }

  let {uid, email, password, firstname, lastname, university, role} = data;

  // Insert into table
  User.create({
    email,
    password,
    firstname,
    lastname,
    university,
    role
  })
  .then(user => res.redirect('/users'))
  .catch(err => console.log(err));
});
module.exports = router;
