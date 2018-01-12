const express = require('express')
const passport = require('passport')
const router = express.Router()

const User = require('../models/user')


// ROOT
router.get('/', (req, res) => { res.render('landing') })

// REGISTER FORM
router.get('/register', (req, res) => { res.render('register') })

// REGISTER LOGIC
router.post('/register', (req, res) => {
    var newUser = new User({ username: req.body.username })
    User.register(newUser, req.body.password, (err, user) => {
        if(err) {
            console.log(err)
            return res.render('register')
        }
        passport.authenticate('local')(req, res, () => { res.redirect('/campgrounds') })
        
    })
})

// LOGIN FORM
router.get('/login', (req, res) => { res.render('login') })

// LOGIN LOGIC
router.post('/login', passport.authenticate('local', 
    {
        successRedirect: '/campgrounds',
        failureRedirect: '/login'
    }), (req, res) => { 
})

// LOGOUT
router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('campgrounds')
})


//   MIDDLEWARE
function isLoggedIn(req, res, next) {
    if(req.isAuthenticated())
        return next()
    res.redirect('/login')
}

module.exports = router
