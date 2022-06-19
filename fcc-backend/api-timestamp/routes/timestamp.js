// timestamp.js
// API Timestamp Microservice for freeCodeCamp Back End Certification
// https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice
// README file in Repository has conditions required for working API
// Completed 06/02/2022 by Matt Stubenhofer
// Modified 06/05/2022 by Matt Stubenhofer

const express = require('express')
const router = express.Router()
const path = require('path')

// Route - Index Page for Information Purposes
router.get('/landing', (req, res) => { res.sendFile(path.join(__dirname, '..', 'views', 'timestamp.html')) })

// Route - API Now Time Slot
// If no timestamp is given as a parameter, send JSON with current time formatted per specifications
router.get('/', (req, res) => {
  let now = new Date()                                            // set date to current timestamp
  res.json({ 'unix': now.getTime(), 'utc': now.toUTCString() })   // format current timestamp into Unix & UTC
})

// Route - API Timestamp Given
// If a timestamp is given as a parameter, follow the conditions below and format time per specifications
// 1.) If timestamp is a proper string (YYYY-MM-DD), send JSON with Unix & UTC Formats as per specifications
// 2.) If timestamp is in unix milliseconds, convert to proper formats and send JSON as specified
// 3.) If timestamp is invalid in any form, send JSON with error notifications
router.get('/:date_string', (req, res) => {
  const dateString = req.params.date_string     // initialize a timestamp string
  const dateUnix = dateString * 1               // convert timestamp string to number, handles unix timestamp
  let date                                      // initialize a date variable for formatting later

  // If the timestamp passed is not a number, i.e. timestamp sent is a string YYYY-MM-DD
  // Set the date variable with a date object relative to the string passed
  // Else If the timestamp passed is a number, passed in unix milliseconds
  // Set the date variable with a date object relative to the milliseconds passed
  date = isNaN(dateUnix) ? date = new Date(dateString) : date = new Date(dateUnix)

  // If the date/timestamp is not in the valid format or is not a valid date, return an error
  // Else If the date/timestamp is valid, return formatted JSON
  res.json((date == 'Invalid Date') ? { error: 'Invalid Date'} : { 'unix': date.getTime(), 'utc': date.toUTCString() })
})

module.exports = router
