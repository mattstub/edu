// Exercise Schema
// This is the exercise schema for our Exercise Tracker API

const mongoose = require('mongoose')

const ExerciseSchema = mongoose.Schema({
  userID: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date }
})

module.exports = mongoose.model('Exercise', ExerciseSchema)
