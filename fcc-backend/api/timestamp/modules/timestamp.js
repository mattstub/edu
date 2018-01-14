const moment = require('moment')

module.exports = {
  convert: (element) => {
    let formatted = {
      "unix": null,
      "natural": null
    }

    if(+element >= 0) {
      formatted.unix = element
      formatted.natural = moment.unix(+element).format("MMMM D, YYYY")
    } else if(moment(element, "MMMM D, YYYY").isValid()) {
      formatted.unix = moment(element, "MMMM D, YYYY").format("X")
      formatted.natural = element
    }

    console.log(formatted)
    return formatted
  }
}
