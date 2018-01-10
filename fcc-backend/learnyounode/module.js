const fs = require('fs')
const path = require('path')
let data = []

module.exports = (directory, extension, callback) => {
  fs.readdir(directory, (error, list) => {
    if (error)
      return callback(error)
    list.forEach(current => {
      if (path.extname(current) == `.${extension}`)
        data.push(current)
    })
    return callback(null, data)
  })
}
