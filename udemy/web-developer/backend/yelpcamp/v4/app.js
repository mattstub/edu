const express    = require('express')
const bodyParser = require('body-parser')
const mongoose   = require('mongoose')
const Campground = require('./models/campground')
const Comment    = require('./models/comment')
const seedDB     = require('./seeds')

const app = express()

mongoose.connect("mongodb://localhost/yelpcamp", {useMongoClient: true});
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

app.set('view engine', 'ejs')

seedDB()

// ========== 
//   ROUTES
// ==========

// ROOT
app.get('/', (req, res) => { res.render('landing') })


// INDEX
app.get('/campgrounds', (req, res) => { 
    Campground.find({}, (err, campgrounds) => { 
        (err) ? console.log(err) : res.render('campgrounds/index', {campgrounds: campgrounds}) 
    }) 
})

// CREATE
app.post('/campgrounds', (req, res) => { 
    Campground.create({ name: req.body.name, image: req.body.image , description: req.body.description }, (err, newCamp) => {
        (err) ? console.log(err) : res.redirect('/campgrounds')
    })
})


// NEW
app.get('/campgrounds/new', (req, res) => { res.render('campgrounds/new') })

// SHOW
app.get('/campgrounds/:id', (req, res) => { 
    Campground.findById(req.params.id).populate('comments').exec((err, foundCampground) => {
        if(err)
            console.log(err) 
        else {
            res.render('campgrounds/show', {campground: foundCampground})
        }
    })
})

// ===================
//   COMMENTS ROUTES
// ===================
app.get('/campgrounds/:id/comments/new', (req, res) => {
    Campground.findById(req.params.id, (err, campground) => {
        if(err)
            console.log(err)
        else
            res.render('comments/new', {campground: campground})
    })
})

app.post('/campgrounds/:id/comments', (req, res) => {
    Campground.findById(req.params.id, (err, campground) => {
        if(err) {
            console.log(err)
            res.redirect('/campgrounds')
        } else {
            Comment.create(req.body.comment, (err, comment) => {
                if(err)
                    console.log(err)
                else {
                    campground.comments.push(comment)
                    campground.save()
                    res.redirect('/campgrounds/' + campground._id)
                }
            })
        }
    })
})


// ==================
//   SERVER STARTUP
// ==================
app.listen(process.env.PORT, process.env.IP, () => { console.log(`YelpCamp Server is Running`) })