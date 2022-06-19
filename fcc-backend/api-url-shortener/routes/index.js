// index.js
// This route serves to host a directory style page in similar format to individual pages

const express = require('express')
const path = require('path')
const router = express.Router()

router.get("/", (req, res) => { res.sendFile(path.join(__dirname, '..', 'views', 'index.html')) })

module.exports = router
