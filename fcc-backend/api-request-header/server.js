// server.js
// freeCodeCamp Back End API Challenges

// Instead of building out each API as a separate repository, I am going to work on routing the APIs through one project
// There is a main index page with links to all of the separate microservices
// Middleware by Dave Gray, Original Links in Files

// CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// Ability for FCC to test code, with CORS enabled

// ======================
//   INITIALIZE PROJECT
// ======================

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const { logger } = require('./middleware/logEvents')
const errorHandler = require('./middleware/errorHandler')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000

require('dotenv').config()

// =================
//   MIDDLEWARE
// =================

app.use(logger)
app.use(errorHandler)

// ==========================
//   SERVER SETUP & ROUTING
// ==========================

app.use(cors({optionsSuccessStatus: 200}))  // some legacy browsers buck at 204
app.use(bodyParser.urlencoded({ extended : false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '/public'))) 
app.use('/api', express.static(path.join(__dirname, '/public')))

app.use('/', require('./routes/index'))
app.use('/api/hello', require('./routes/hello'))
app.use('/api/whoami', require('./routes/request'))

// ======================
//   SERVER INITIALIZED
// ======================

app.all('*', (req, res) => {
    res.status(404)
    if(req.accepts('html'))
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    else if(req.accepts('json'))
        res.json({ error: '404 Not Found' })
    else
        res.type('txt').send('404 Not Found')
})

// ======================
//   SERVER INITIALIZED
// ======================

app.listen(PORT, () => { console.log(`Server Running on port ${PORT}`) })
