// request.js
// API Request Header Parser Microservice for freeCodeCamp Back End Certification
// (https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/request-header-parser-microservice)
// README file in Repository has conditions required for working API

const express = require('express')
const router = express.Router()
const path = require('path')

// Route - Index Page for Information Purposes
router.get("/landing", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'request.html'))
})

// One single API endpoint for user information
// A request returns a valid IP address in JSON
// A request returns the preferred language of the user in JSON
// A request returns the browser software of the user in JSON
router.get('/', (req, res) => {
  res.json({ 
    'ipaddress' : req.connection.remoteAddress, 
    'language' : req.headers['accept-language'], 
    'software' : req.headers['user-agent'] })
})

module.exports = router
