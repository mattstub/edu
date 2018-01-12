# Introduction to Associations
- Define Associations
  - Allow us to have multiple collections in our database that are related to each other
  - Want to be able to have users associated with campgrounds, and comments associated with users and comments
  - the term associations just points to the theory that there are relationships between data
  - there are different types of associations
    - one to one
    - one to many
    - many to many
- Discuss `1:1`; `1:Many`; `Many:Many` relationships
  - `1:1` or `One to One`
    - simplest relationship
    - one entity related to one other entity
    - one book has one publisher
  - `1:many' or `One to Many`
    - one entity related to many other entities
    - one user has many comments
    - one user has many photos
  - `many:many` or `Many to Many`
    - many entities related to many other entities
    - many students can have many classes

## Embedding Data

```javascript
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

let newUser = new User({ email: 'hermione@hogwarts.edu', name: 'Hermoine Granger' })

newUser.posts.push({ title: 'Brewing Potions', content: 'Go to class and learn you bum' })
newUser.save((err, user) => { (err) ? console.log(err) : console.log(user) })

let newPost = new Post({ title: 'Reflections on Apples', content: 'They are delicious!' })
newPost.save((err, post) => { (err) ? console.log(err) : console.log(post) })

User.findOne({ name: 'Hermoine Granger'}, (err, user) => {
    if (err) 
        console.log(err)
    else {
        user.posts.push({ title: '3 things i really hate', content: 'voldomort, voldomort, voldomort' })
        user.save((err, user) => { (err) ? console.log(err) : console.log(user) })
    }
})
```

## Referencing Data
```javascript
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
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
})
let User = mongoose.model('User', userSchema)

Post.create({ title: 'post 5', content: 'feiwufb413513eqgqegrqegrqegrqegrqegrqef' }, (err, post) => { 
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
```