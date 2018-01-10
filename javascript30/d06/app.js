const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

const cities = []

const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data))

function findMatches(word, cities) {
  return cities.filter(place => {
    const reg = new RegExp(word, 'gi')
    return place.city.match(reg) || place.state.match(reg)
  })
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function displayMatches() {
  const matched = findMatches(this.value, cities)
  const html = matched.map(place => {
    const reg = new RegExp(this.value, 'gi') 
    const nameCity = place.city.replace(reg, `<span class="hl">${this.value}</span>`)
    const nameState = place.state.replace(reg, `<span class="hl">${this.value}</span>`)
    const population = numberWithCommas(place.population)
    const spanName = `<span class="name">${nameCity}, ${nameState}</span>`
    const spanPop = `<span class="population">${population}</span>`
    return `<li> ${spanName} ${spanPop} </li>`
  }).join('');
  suggestions.innerHTML = html;
}

// Event Listeners
searchInput.addEventListener('change', displayMatches)
searchInput.addEventListener('keyup', displayMatches)
