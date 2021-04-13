const express = require("express")
const users = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const Users = require("../models/Users")
users.use(cors())

process.env.SECRET_KEY = 'secret'

// REGISTER
users.post('/register', (req,res) => {
  const userData = {
    email: req.body.email,
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    university: req.body.university,
    role: req.body.university
  }

  Users.findOne({
    where: {
      email:req.body.email
    }
  })
    .then(users => {
      if (!users) {
        const hash = bcrypt.hashSync(userData.password, 10)
        userData.password = hash
        Users.create(userData)
          .then(users => {
            let token = jwt.sign(users.dataValues, process.env.SECRET_KEY,{
                expiresIn: 1440
            })
            res.json({token: token})
          })
          .catch(err => {
            res.send('error' + err)
          })
      }
    })
})

// 

module.exports = users
