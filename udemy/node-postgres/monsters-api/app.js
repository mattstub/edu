const express = require('express')
const parser = require('body-parser')
const routes = require('./routes')

const app = express()

app.use(parser.json())
app.use('/', routes)
app.use((err, req, res, next) => res.json(err))

module.exports = app
