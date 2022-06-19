// hello.js
// This is just a test endpoint from the original boilerplate code offered by freeCodeCamp
// Chose to leave this in code, because it was helpful originally when breaking out the routing

const express = require('express')
const router = express.Router()

router.get("/", (req, res) => { res.json({greeting: 'hello API'}) })

module.exports = router
