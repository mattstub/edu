const express    = require('express')
const app        = express()
const bodyParser = require('body-parser')
const mongoose   = require('mongoose')

mongoose.connect("mongodb://localhost/yelpcamp", {useMongoClient: true});
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('view engine', 'ejs')


// ================
//   SCHEMA SETUP
// ================
let campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
})

let Campground = mongoose.model('Campground', campgroundSchema)

    
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
    Campground.findById(req.params.id, (err, foundCampground) => {
        (err) ? console.log(err) : res.render('show', {campground: foundCampground})
    })
})


// ==================
//   SERVER STARTUP
// ==================
app.listen(process.env.PORT, process.env.IP, () => { console.log(`YelpCamp Server is Running`) })