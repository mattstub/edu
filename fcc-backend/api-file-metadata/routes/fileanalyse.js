// meta.js
// File Metadata Microservice for freeCodeCamp Back End Certification
// https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/file-metadata-microservice
// README file in Repository has conditions for working API

const express = require('express')
const router = express.Router()
const path = require('path')
const multer = require('multer')

// Route - Index Page for Information Purposes
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'fileanalyse.html'))
})

// Route - Post for file upload
// Multer middleware brings in files and stores to local memory instead of storing in file system or database
// Take uploaded file into memory, and then use multer().single() to create an object with specified file information
// Create object and store 'name', 'type' and size' of the file uploaded, respond with JSON object of object
router.post('/', multer().single('upfile'), (req, res) => {
    let resObject = {}
    resObject['name'] = req.file.originalname
    resObject['type'] = req.file.mimetype
    resObject['size'] = req.file.size
    res.json(resObject)
})

module.exports = router
