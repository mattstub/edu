const express = require('express')
const parser = require('body-parser')
const ejs = require('ejs')
const pg = require('pg')

const app = express()

let votes = {
  sandwiches: 0,
  tacos: 0
}

let urlencodedParser = parser.urlencoded({ extended: false })

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.get('/', (req, res) => res.render('pages/index', { votes: votes }))

app.post('/vote', urlencodedParser, (req, res) => {
  let vote = req.body.yourVote
  if(vote === 'sandwiches')
    votes.sandwiches += 1
  else if(vote === 'tacos')
    votes.tacos += 1
  else
    console.log(`Error: ${vote}`)
  res.redirect('/')
})

app.listen(8888, () => console.log(`Running on http://localhost:8888`))
