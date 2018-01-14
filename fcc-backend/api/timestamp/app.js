const express = require('express')
const parser = require('body-parser')
const routes = require('./routes')

const app = express()

app.use(parser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

app.use('/', routes)

app.use((err, req, res, next) => res.json(err))

app.set('view engine', 'ejs')

module.exports = app
