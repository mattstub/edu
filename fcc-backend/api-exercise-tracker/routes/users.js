// users.js
// Exercise Tracker Microservice for freeCodeCamp Back End Certification
// https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/exercise-tracker
// README file in Repository has conditions for working API

const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const path = require('path')
const Exercise = require('../models/exercises')
const ExUser = require('../models/exusers')

// Route - Index Page for Information Purposes
router.get("/landing", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'exercise.html'))
})

// Route - Get: A list of all users
// GET request to /api/users returns a list of all user JSON objects
router.get('/', (req, res) => {
  ExUser.find({}, (err, data) => {            
    if (err || !data)
      res.send('Error Finding Users..')
    else
      res.json(data)                                
  })
})

// Route - Post Form Data for Created User
// POST request to submit a created user, return a JSON object with username and _id
// Search the DB to see if the newUser already exists
// IF the user already exists, return the user information, including ID in JSON format
// ELSE save the new user and return the usern information in JSON format
router.post('/', async (req, res) => {
  try {
    const newUser = new ExUser({ username: req.body.username })
    const userExists = await ExUser.findOne({ username: req.body.username }).exec()   
    if (userExists) {
      res.json({
        'username': userExists.username,
        '_id': userExists._id
      })
    } else {  
      newUser.save((err, data) => {
        if (err || !data) 
          res.send('Error Saving User..')
        else
          res.json({
            username: data.username,
            _id: data._id
          })
      })
    }
  } catch (error) {
    console.error(error)
  }
})

// Route - Post: post with description and duration of exercises
// POST request with form data as specified
// If no date is supplied with form, current timestamp will be used
router.post('/:id/exercises', (req, res) => {
  let tempDate = new Date(req.body.date)
  
  const id = req.params.id
  const { description, duration } = req.body
  
  ExUser.findById(id, (err, userData) => {          // Locate the User to connect the Exercise Information With
    if(isNaN(tempDate))                             // IF a date is not supplied on the form, as it is optional to submit with form
      tempDate = new Date()                         // Provide a new date with current timestamp
    if (err || !userData)                           // Check to insure the user exists in the system
      res.send('Could not find user')
    else {
      const newExercise = new Exercise({            // If the user does exist, tie the exercise information to the user id
        userID: id,
        description,
        duration,
        date: tempDate
      })
      newExercise.save((err, data) => {             // Save the exercise information with user id for logging purposes later
        if (err || !data)
          res.send('There was an error saving the exercise')
        else 
          res.json({
            username: userData.username,
            description: data.description,
            duration: data.duration,
            date: new Date(data.date).toDateString(),            
            _id: userData.id
          })
      })
    }
  })
})

// Route - Get: retrieve full exercise log of user
// GET request with specified id of user to retrieve exercise logs
router.get('/:id/logs', (req, res) => {
  const { from, to, limit } = req.query                 // From, To, Limit are all query options that can be submitted with the request; create a form for this?
  const { id } = req.params                             // Get the relevant user id information

  ExUser.findById(id, (err, userData) => {              // Locate the user being requested for logs
    if (err || !userData)
      res.send('Could not find user')
    else {
      let dateFilter = {}
      if (from)                                         // If a from paramter is submitted with the query
        dateFilter['$gte'] = new Date(from)             // Set the lower end of the dateFilter object
      if (to)                                           // If a to paramter is submitted with the query
        dateFilter['$lte'] = new Date(to)               // Set the upper end of the dateFilter object
      let filter = { userID: id }                       
      if (from || to)
        filter.date = dateFilter;

      let boundary = limit || 100
      
      Exercise.find(filter).limit(boundary).exec((err, data) => {     // Locate exercises from the users history, defined by the filter, set to a boundary, default boundary is 100
        if (err || !data)
          res.json([])
        else {
          const count = data.length
          const { username, _id } = userData
          const log = data.map((l) => ({
            description: l.description,
            duration: l.duration,
            date: new Date(l.date).toDateString()
          }))
          res.json({
            'username': username, 
            'count': count, 
            '_id': _id,
            'log': log
          })   
        }
      })
    }
  })
})

module.exports = router
