const { Router } = require('express')
const timestamp = require('../modules/timestamp')

const router = Router()

router.get('/api/:date', (request, response, next) => {
  console.log(request.params.date)
  let stamp = timestamp.convert(request.params.date)
  response.send(stamp)
})

router.get('/', (request, response, next) => response.render("index.ejs"))

module.exports = router
