// ShortURL Schema
// This is the URL Shortener Microservice Schema for our Mongo Database
// Originally I was passing a couple more things as a part of the Schema and was receiving errors when testing remotely so they were removed and revised

const mongoose = require('mongoose')
const { Schema } = mongoose

let ShortURLSchema = mongoose.Schema({
    original_url: String,
    short_url: String
})

module.exports = mongoose.model('ShortURL', ShortURLSchema)
