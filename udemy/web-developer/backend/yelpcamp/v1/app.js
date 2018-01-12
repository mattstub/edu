const express = require('express')
const app = express()
const bodyParser = require('body-parser')

let campgrounds = [
    { name: 'Salmon Creek',   image: 'https://farm5.staticflickr.com/4376/36437924985_07bb927043.jpg' },
    { name: 'Granite Hill',   image: 'https://farm7.staticflickr.com/6186/6090714876_44d269ed7e.jpg'  },
    { name: 'Limestone Pass', image: 'https://farm4.staticflickr.com/3510/3780855611_dcce5cc376.jpg'  },
    { name: 'Bunker Bay',     image: 'https://farm9.staticflickr.com/8446/7992585452_00a5900869.jpg'  },
    { name: 'Limestone Pass', image: 'https://farm4.staticflickr.com/3510/3780855611_dcce5cc376.jpg'  },
    { name: 'Salmon Creek',   image: 'https://farm5.staticflickr.com/4376/36437924985_07bb927043.jpg' },
    { name: 'Granite Hill',   image: 'https://farm7.staticflickr.com/6186/6090714876_44d269ed7e.jpg'  },
    { name: 'Limestone Pass', image: 'https://farm4.staticflickr.com/3510/3780855611_dcce5cc376.jpg'  },
    { name: 'Granite Hill',   image: 'https://farm7.staticflickr.com/6186/6090714876_44d269ed7e.jpg'  },
    { name: 'Bunker Bay',     image: 'https://farm9.staticflickr.com/8446/7992585452_00a5900869.jpg'  }
]

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => { res.render('landing') })
app.get('/campgrounds', (req, res) => { res.render('campgrounds', { campgrounds: campgrounds }) })

app.post('/campgrounds', (req, res) => { 
    campgrounds.push({ name: req.body.name, image: req.body.image })
    res.redirect('/campgrounds')
})

app.get('/campgrounds/new', (req, res) => { res.render('new') })

app.listen(process.env.PORT, process.env.IP, () => { console.log(`YelpCamp Server is Running`) })