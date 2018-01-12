const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
const local = require('passport-local')

const Campground = require('./models/campground')
const Comment = require('./models/comment')
const User = require('./models/user')

const seedDB = require('./seeds')

const app = express()


// ==========================
//   PASSPORT CONFIGURATION
// ==========================

app.use(require('express-session')({
    secret: 'something secret',
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())
passport.use(new local(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())


// ================
//   SERVER SETUP
// ================

mongoose.connect("mongodb://localhost/yelpcamp", {useMongoClient: true});
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
})

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

app.get('/campgrounds/:id/comments/new', isLoggedIn, (req, res) => {
    Campground.findById(req.params.id, (err, campground) => {
        if(err)
            console.log(err)
        else
            res.render('comments/new', {campground: campground})
    })
})

app.post('/campgrounds/:id/comments', isLoggedIn, (req, res) => {
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


// =========================
//   AUTHENTICATION ROUTES
// =========================

app.get('/register', (req, res) => { res.render('register') })

app.post('/register', (req, res) => {
    var newUser = new User({ username: req.body.username })
    User.register(newUser, req.body.password, (err, user) => {
        if(err) {
            console.log(err)
            return res.render('register')
        }
        passport.authenticate('local')(req, res, () => { res.redirect('/campgrounds') })
        
    })
})

app.get('/login', (req, res) => { res.render('login') })

app.post('/login', passport.authenticate('local', 
    {
        successRedirect: '/campgrounds',
        failureRedirect: '/login'
    }), (req, res) => { 
})

app.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/campgrounds')
})


// ==============
//   MIDDLEWARE
// ==============

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated())
        return next()
    res.redirect('/login')
}


// ==================
//   SERVER STARTUP
// ==================

app.listen(process.env.PORT, process.env.IP, () => { console.log(`YelpCamp Server is Running`) })
