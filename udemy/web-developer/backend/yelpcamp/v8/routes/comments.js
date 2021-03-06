const express = require('express')
const router = express.Router({mergeParams: true})

const Campground = require('../models/campground')
const Comment = require('../models/comment')


// COMMENTS - NEW
router.get('/new', isLoggedIn, (req, res) => {
    Campground.findById(req.params.id, (err, campground) => {
        if(err)
            console.log(err)
        else
            res.render('comments/new', {campground: campground})
    })
})

// COMMENTS - CREATE
router.post('/', isLoggedIn, (req, res) => {
    Campground.findById(req.params.id, (err, campground) => {
        if(err) {
            console.log(err)
            res.redirect('/campgrounds')
        } else {
            Comment.create(req.body.comment, (err, comment) => {
                if(err)
                    console.log(err)
                else {
                    comment.author.id = req.user._id
                    comment.author.username = req.user.username
                    comment.save()
                    campground.comments.push(comment)
                    campground.save()
                    res.redirect('/campgrounds/' + campground._id)
                }
            })
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
