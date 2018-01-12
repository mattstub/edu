const mongoose = require('mongoose')
const Post = require('./models/post')
const User = require('./models/user')

mongoose.connect("mongodb://localhost/references", {useMongoClient: true});
mongoose.Promise = global.Promise;

Post.create({ title: 'post 6', content: 'feiwufb413513eeg3qg53g53qgqegrqegrqegrqegrqegrqef' }, (err, post) => { 
    if (err)
        console.log(err)
    else {
        User.findOne({email: 'bob@gmail.com'}, (err, found) => { 
            if(err)  
                console.log(err) 
            else { 
                found.posts.push(post) 
               found.save((err, data) => { (err) ? console.log(err) : console.log(data) })
            }
        })
    }
}) 

User.findOne({email: 'bob@gmail.com'}).populate('posts').exec((err, user) => { (err) ? console.log(err) : console.log(user) })
