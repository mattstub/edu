const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/associations", {useMongoClient: true});
mongoose.Promise = global.Promise;

// POST - title, content
let postSchema = new mongoose.Schema({
    title: String,
    content: String
})
let Post = mongoose.model('Post', postSchema)

// USER - email, name
let userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
})
let User = mongoose.model('User', userSchema)


// let newUser = new User({ email: 'hermione@hogwarts.edu', name: 'Hermoine Granger' })

// newUser.posts.push({ title: 'Brewing Potions', content: 'Go to class and learn you bum' })
// newUser.save((err, user) => { (err) ? console.log(err) : console.log(user) })

// let newPost = new Post({ title: 'Reflections on Apples', content: 'They are delicious!' })
// newPost.save((err, post) => { (err) ? console.log(err) : console.log(post) })

User.findOne({ name: 'Hermoine Granger'}, (err, user) => {
    if (err) 
        console.log(err)
    else {
        user.posts.push({ title: '3 things i really hate', content: 'voldomort, voldomort, voldomort' })
        user.save((err, user) => { (err) ? console.log(err) : console.log(user) })
    }
})