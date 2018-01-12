const express   = require('express')
const parser    = require('body-parser')
const mongoose  = require('mongoose')
const override  = require('method-override')
const app       = express()
const sanitizer = require('express-sanitizer')

// ==============
//   APP CONFIG
// ==============
mongoose.connect("mongodb://localhost/restful", {useMongoClient: true});
mongoose.Promise = global.Promise;

app.use(parser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(override('_method'))
app.use(sanitizer())
app.set('view engine', 'ejs')

// ==========
//   SCHEMA
// ==========
let blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
})

let Blog = mongoose.model('Blog', blogSchema)

// ==================
//   RESTFUL ROUTES
// ==================
app.get('/', (req, res) => { res.redirect('/blogs') })

// INDEX ROUTE
app.get('/blogs', (req, res) => { 
    Blog.find({}, (err, blogs) => {
        (err) ? console.log(`Error: ${err}`) : res.render('index', {blogs: blogs})
    })
})

// NEW ROUTE
app.get('/blogs/new', (req, res) => { res.render('new') })

// CREATE ROUTE
app.post('/blogs', (req, res) => {
    req.body.blog.body = req.sanitize(req.body.blog.body)
    Blog.create(req.body.blog, (err, blog) => {
        (err) ? res.render('new') : res.redirect('/blogs')
    })
})

// SHOW ROUTE
app.get('/blogs/:id', (req, res) => { 
    Blog.findById(req.params.id, (err, found) => {
        (err) ? res.redirect('/blogs') : res.render('show', {blog: found}) 
    })
})

// EDIT ROUTE
app.get('/blogs/:id/edit', (req, res) => {
    Blog.findById(req.params.id, (err, found) => {
        (err) ? res.redirect('/blogs') : res.render('edit', {blog: found}) 
    })
})

// UPDATE ROUTE
app.put('/blogs/:id', (req, res) => {
    req.body.blog.body = req.sanitize(req.body.blog.body)
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, (err, updated) => {
        (err) ? res.redirect('/blogs') : res.redirect('/blogs/' + req.params.id)
    })
})

// DELETE ROUTE
app.delete('/blogs/:id', (req, res) => { Blog.findByIdAndRemove(req.params.id, (err) => (err) ? res.redirect('/blogs') : res.redirect('/blogs')) })

// =================
//   SERVER STARUP
// =================
app.listen(process.env.PORT, process.env.IP, () => { console.log(`Server is Running`) })