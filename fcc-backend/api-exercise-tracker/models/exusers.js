// Exercise User Schema
// This is the exercise user schema for our Exercise Tracker API

const mongoose = require('mongoose')

const ExUserSchema = mongoose.Schema({
  username: { type: String, unique: true },
})

module.exports = mongoose.model('ExUser', ExUserSchema)
