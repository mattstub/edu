const express = require('express')
const router = express.Router()

const Campground = require('../models/campground')
const Comment = require('../models/comment')


// INDEX
router.get('/', (req, res) => { 
    Campground.find({}, (err, campgrounds) => { 
        (err) ? console.log(err) : res.render('campgrounds/index', {campgrounds: campgrounds}) 
    }) 
})

// CREATE
router.post('/', isLoggedIn, (req, res) => { 
    let author = {
        id: req.user._id,
        username: req.user.username
    }
    Campground.create(
        { 
            name: req.body.name, 
            image: req.body.image, 
            description: req.body.description,
            author: author
        }, (err, newCamp) => {
            (err) ? console.log(err) : res.redirect('/campgrounds')
        })
})

// NEW
router.get('/new', isLoggedIn, (req, res) => { res.render('campgrounds/new') })

// SHOW
router.get('/:id', (req, res) => { 
    Campground.findById(req.params.id).populate('comments').exec((err, foundCampground) => {
        if(err)
            console.log(err) 
        else {
            res.render('campgrounds/show', {campground: foundCampground})
        }
    })
})

//   MIDDLEWARE
function isLoggedIn(req, res, next) {
    if(req.isAuthenticated())
        return next()
    res.redirect('/login')
}

module.exports = router
