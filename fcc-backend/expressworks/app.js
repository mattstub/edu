// Repo for ExpressWorks Challenges for freeCodeCamp
// -- v1.0.0

// ========================================
// Exercise 1 -- HELLO WORLD!

// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//   res.end('Hello World!')
// })

// app.listen(process.argv[2])

// ========================================
// Exercise 2 -- STATIC

// const express = require('express')
// const app = express()

// app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))

// app.listen(process.argv[2])

// ========================================
// Exercise 3 -- PUG

// const express = require('express')
// const app = express()

// app.set('view engine', 'pug')
// app.set('views', process.argv[3] || path.join(__dirname, 'templates'))

// app.get('/home', (req, res) => {
//   res.render('index', { date: new Date().toDateString() })
// })

// app.listen(process.argv[2])

// ========================================
// Exercise 4 -- GOOD OLD FORM

// const express = require('express')
// const parser = require('body-parser')
// const app = express()

// app.use(parser.urlencoded({ extended: false }))

// app.post('/form', (req, res) => {
//   let reverse = req.body.str.split('').reverse().join('')
//   res.send(reverse)
// })

// app.listen(process.argv[2])

// ========================================
// Exercise 5 -- STYLISH CSS

// const express = require('express')
// const stylus = require('stylus')
// const app = express()

// app.use(stylus.middleware(process.argv[3] || path.join(__dirname, 'templates')))
// app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))

// app.listen(process.argv[2])

// ========================================
// Exercise 6 -- PARAM PAM PAM

const express = require('express')
const crypto = require('crypto')
const app = express()

app.put('/message/:id', (req, res) => {
  let hash = crypto.createHash('sha1')
                   .update(new Date().toDateString() + req.params.id)
                   .digest('hex')
  res.send(hash)
})

app.listen(process.argv[2])
