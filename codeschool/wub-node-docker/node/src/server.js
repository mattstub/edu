const express = require('express')
const parser = require('body-parser')
const ejs = require('ejs')
const pg = require('pg')

const app = express()

let votes = {
  sandwiches: 0,
  tacos: 0
}

let client = new pg.Client('postgres://postgres@172.17.0.1:9000/postgres')
client.connect((err) => {
  if(err) throw err
  client.query('SELECT number_of_votes FROM votes', (err, res) => {
    if(err) throw err
    votes.sandwiches = res.rows[0].number_of_votes
    votes.tacos = res.rows[1].number_of_votes
  })
})

let urlencodedParser = parser.urlencoded({ extended: false })

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.get('/', (req, res) => res.render('pages/index', { votes: votes }))

app.post('/vote', urlencodedParser, (req, res) => {
  let vote = req.body.yourVote
  if(vote === 'sandwiches') {
    votes.sandwiches += 1
    client.query(
      `UPDATE votes SET number_of_votes=${votes.sandwiches} WHERE option_name='sandwiches'`, 
      (err, result) => {
        if(err) throw err
      })
  } else if(vote === 'tacos') {
    votes.tacos += 1
    client.query(
      `UPDATE votes SET number_of_votes=${votes.tacos} WHERE option_name='tacos'`, 
      (err, result) => {
        if(err) throw err
      })
  } else
    console.log(`Error: ${vote}`)
  res.redirect('/')
})

app.listen(8888, () => console.log(`Running on http://localhost:8888`))
