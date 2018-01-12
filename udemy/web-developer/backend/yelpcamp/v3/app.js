const express    = require('express')
const bodyParser = require('body-parser')
const mongoose   = require('mongoose')
const Campground = require('./models/campground')
const seedDB     = require('./seeds')

const app = express()

seedDB()
mongoose.connect("mongodb://localhost/yelpcamp", {useMongoClient: true});
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('view engine', 'ejs')

// ========== 
//   ROUTES
// ==========

// ROOT
app.get('/', (req, res) => { res.render('landing') })


// INDEX
app.get('/campgrounds', (req, res) => { 
    Campground.find({}, (err, campgrounds) => { 
        (err) ? console.log(err) : res.render('index', {campgrounds: campgrounds}) 
    }) 
})

// CREATE
app.post('/campgrounds', (req, res) => { 
    Campground.create({ name: req.body.name, image: req.body.image , description: req.body.description }, (err, newCamp) => {
        (err) ? console.log(err) : res.redirect('/campgrounds')
    })
})


// NEW
app.get('/campgrounds/new', (req, res) => { res.render('new') })

// SHOW
app.get('/campgrounds/:id', (req, res) => { 
    Campground.findById(req.params.id).populate('comments').exec((err, foundCampground) => {
        if(err)
            console.log(err) 
        else {
            res.render('show', {campground: foundCampground})
        }
    })
})


// ==================
//   SERVER STARTUP
// ==================
app.listen(process.env.PORT, process.env.IP, () => { console.log(`YelpCamp Server is Running`) })