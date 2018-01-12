# Introduction to Express
- What is a framework? How is it different from a library?
- What is Express?
- Why are we using Express?

## What is a Framework?
- A library is code someone else wrote that we can use in our application
- The defining difference between a library and a framework is Inversion of Control
  - When you call a library you are in control
  - When you call a framework, the framework calls you
- Basically all the control flow is already in the framework, and there's just a bunch of predefined white spots that you can fill out with your code
- A library on the other hand is a collection of functionality you can call
- Framework, think of ad-libs. They give you the structure, you fill in certain parts
  - Frameworks take care of the boring stuff that you need to have, and allow you to get right to code

## What is Express?
- Is a web development Framework for JavaScript
- One of Many

## Why are we Using Express?
- Very similar to why we are learning Node
- Express is the most popular Node Framework
- Lots of information out there on learning, large community
- Heavyweight vs. Lightweight
  - How much the framework does for you versus how much you do yourself
- Express is lightweight, you use and know what you are getting
- Rails is a heavyweight that does so much for you 
- [Express.js](https://www.expressjs.com) - Fast, unopinionated, minimalist web framework for Node.js

## HTTP Response/Request Lifecycle
- Search for a website - *HTTP request*
- Returns the website requested - *HTTP response*
- Routes are the code for listening and receiving the requests
- They determine what responses to send based on requests

## NPM Init and Package.json
- Use the ` --save ` flag to install packages
  - this will automatically inject the package into the package.json file 
  - Use ` npm init ` to create the package.json
  - Use ` npm install <pkg> --save ` afterwards to install a package and save it as a dependency in the package.json file.
- Explain what the package.json file does
  - it hold relevant meta data that is required for the project
  - instead of uploading all node modules with projects, incorporate them with package.json
  - the recipe for the package. you wouldn't send all of the ingrediants for a cooking recipe, you just tell the person what they need on their shopping list. that is the package.json
- [Nodejitsu](https://docs.nodejitsu.com/articles/getting-started/npm/what-is-the-file-package-json)

## More Routing
- Show the ` * ` route matcher
- Write routes containing route parameters
- Discuss route order
  - order of routes matters
  - if you have a catch all up top, then everything will go to that
  - the first route to meet the request response is triggered
- Find ways to make Route Patterns

## Route Parameters
- Make a design pattern with a color (:)
  - i.e. ` app.get('/r/:subreddit', (req, res) => { res.send('Welcome to a subreddit'); }); `
- In the request.params you will receive the parameter of ` subreddit ` from above

### DRY vs WET
- DRY stands for ` Don't Repeat Yourself `
- WET stands for ` Write Everything Twice `
- You want DRY code
