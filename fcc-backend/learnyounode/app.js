//   LEARNYOUNODE Exercises for freeCodeCamp Back End Certification Challenge
//   -- v1.0.0 -- pass through all challenges
//   -- v2.0.0 -- pass through all challenges, incorporating a test runner (ava or mocha)

// ===================================
// Exercise 1 -- HELLO WORLD 

// console.log('HELLO WORLD')

// ===================================
// Exercise 2 -- BABY STEPS

// const argumentsArray = process.argv
// let sum = 0
// for(let i = 2; i < argumentsArray.length; i++) {
//   sum+= +argumentsArray[i]
// }
// console.log(sum)

// ===================================
// Exercise 3 -- MY FIRST I/O!

// const fs = require('fs')
// console.log(fs.readFileSync(process.argv[2]).toString().split('\n').length - 1)

// ===================================
// Exercise 4 -- MY FIRST ASYNC I/O!

// const fs = require('fs')
// fs.readFile(process.argv[2], 'utf8', (error, data) => {
//   if (error) throw error
//   console.log(data.split('\n').length - 1)
// })

// ===================================
// Exercise 5 -- FILTERED LS  

// const fs = require('fs')
// const path = require('path')

// fs.readdir(process.argv[2], (error, list) => {
//   list.forEach(current=> {
//     if (path.extname(current) == `.${process.argv[3]}`)
//       console.log(current)
//   })
// })

// ===================================
// Exercise 6 -- MAKE IT MODULAR

// const app = require('./module')

// app(process.argv[2], process.argv[3], (error, data) => {
//   if (error)
//     console.log(error)
//   else
//     data.forEach(current => { console.log(current) })
// })

// ===================================
// Exercise 7 -- HTTP CLIENT

// const http = require('http')

// http.get(process.argv[2], (res) => {
//   res.setEncoding('utf8')
//   res.on('data', data => { console.log(data) })
//   res.on('error', error => { console.error(`Error: ${error}`) })
// }).on('error', error => { console.error(`Error: ${error}`) })

// ===================================
// Exercise 8 -- HTTP COLLECT

// const http = require('http')
// const bl = require('bl')

// http.get(process.argv[2], (res) => {
//   res.pipe(bl((error, data) => {
//     if (error)
//       console.error(`Error: ${error}`)
//     data = data.toString()
//     console.log(`${data.length}\n${data}`)
//   }))
// })

// ===================================
// Exercise 9 -- JUGGLING ASYNC

// const http = require('http')
// const bl = require('bl')

// let globalCount = 0
// let results = []

// function printLines() {
//   for(value of results)
//     console.log(value)
// }

// function goGet(num) {
//   http.get(process.argv[2 + num], (response) => {
//     response.pipe(bl((error, data) => {
//       if (error)
//         console.error(`Error: ${error}`)
//       results[num] = data.toString()
//       globalCount++
//       if(globalCount == 3)
//         printLines()
//     }))
//   })
// }https://github.com/samsonjs/strftime

// for(let i = 0; i < 3; i++) {
//   goGet(i)
// }

// ===================================
// Exercise 10 -- TIME SERVER

// const net = require('net')
// const strftime = require('strftime')
// const server = net.createServer(socket => { socket.end(strftime(`%F %H:%M`, new Date()) + '\n') })
// server.listen(process.argv[2])

// ===================================
// Exercise 11 -- HTTP FILE SERVER

// const http = require('http')
// const fs = require('fs')
// const server = http.createServer((req, res) => {
//   res.writeHead(200, {'content-type': 'text/plain'})
//   fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(process.argv[2])

// ===================================
// Exercise 12 -- HTTP UPPERCASERER

// const http = require('http')
// const map = require('through2-map')
// const server = http.createServer((req, res) => {
//   req.pipe(map(data => {
//     return data.toString().toUpperCase()
//   })).pipe(res)
// })

// server.listen(process.argv[2])

// ===================================
// Exercise 13 -- HTTP JSON API SERVER

const http = require('http')
const url = require('url')

const unixReg = /^\/api\/unixtime/
const normReg = /^\/api\/parsetime/

function parsetime (time) {
  return { 
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime: time.getTime() }
}

const server = http.createServer((req, res) => {
  const parseURL = url.parse(req.url, true)
  const time = new Date(parseURL.query.iso)
  var jsonResult = {}

  if (normReg.test(req.url))
    jsonResult = parsetime(time)
  else if (unixReg.test(req.url))
    jsonResult = unixtime(time)

  if (jsonResult) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(jsonResult))
  } else {
    res.writeHead(404)
    res.end()
  }
})

server.listen(process.argv[2])
