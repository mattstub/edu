const mongoose   = require('mongoose')
const Campground = require('./models/campground')
const Comment    = require('./models/comment')

let data = [
    { 
        name: "Cloud's Rest",
        image: 'https://farm5.staticflickr.com/4080/4938516049_eef5cbc734.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' 
    }, 
    {
        name: 'Cypress Point',
        image: 'https://farm5.staticflickr.com/4044/4455053417_1f5fac5631.jpg',
        description: 'Quisque dignissim imperdiet dui tincidunt aliquet. Nunc commodo laoreet lobortis.'
    }, 
    {
        name: 'Ridge Top',
        image: 'https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg',
        description: 'Aliquam quis scelerisque odio.'
    }
]

function seedDB() {
    Campground.remove({}, (err) => { 
        if(err) 
            console.log(err) 
        else {
            console.log('removed campgrounds')
            data.forEach((seed) => {
                Campground.create(seed, (err, campground) => { 
                    if(err) 
                        console.log(err)
                    else {
                        console.log('added campground')
                        Comment.create(
                            {
                                text: 'this is awesome, wish we had internet', author: 'homer'
                            }, (err, comment) => {
                                if(err)
                                    console.log(err)
                                else {
                                    campground.comments.push(comment)
                                    campground.save()
                                    console.log('created comment')
                                }
                        })
                    }
                })
            })
        }
    })
}

module.exports = seedDB;