# Introduction to Back End

## Static vs Dynamic
There are two different types of websites, static and dynamic.
- Static are created on the server side, and compiled together before being sent back to the browser
- Dynamic has a website that could change but still be the same structure. Same structure but different formats depending on certain things

### Generic Stack
- Backend Language / App
- Server
- Database
- Website Showing Different Site [Stacks](https://stackshare.io)

#### Reddit's Stack
- Backend Language -- Python / Flask (Framework)
- Server -- nginx
- Database -- postgresql

#### Our Stack 
- Backend - node.js
- Server -- Express
- Database - MongoDB

### Potential Backend Features (Reddit Model)
- Backend
  - Check if the user is logged in
  - Figure out what html, css and js to send to the user
- Server
  - Sign up a user
  - Add new post to database
  - Create new comment
- Database
  - Remove post from database
  - Sort/Rank posts
  - Create Subreddit
  - Add to newsletter

## Frontend - Backend
- FE -- Ask for reddit homepage
  - BE -- Get top posts from DB to send back home page content
- FE -- Browser renders home page

- FE -- User enters 'dogs' in search box and submits form
  - BE -- Finds all posts in DB about 'dogs'
  - BE -- Sends back HTML for the search results page
- FE -- Browser renders search page

## HTTP In Depth
[Postman](https://www.getpostman.com)
1. HTTP requests can be made in many different forms, they are not required to be done in a browser.
2. Most prolific HTTP Verbs are -- GET, POST, PUT, PATCH, DELETE
3. Receive three important things with each response
  - Body
    - Payload: HTML, CSS, JS
  - Headers
    - The metadata of the response
  - Status Codes
    - Just part of the HTTP protocol
    - Standardized ways to determine page request
      - 200 means OK
      - 404 means NOT FOUND

## Backend Workflow Part 1
- Develop a server file to initialize the server
  - This code will listen for different requests
  - In turn the server will respond based on request
- '/' is the root path, where you want your homepage to be
- The three tools you need: Text Editor, Terminal, Browser

## Backend Workflow Part 2
- Once a visitor utilizes the post route, it follows code
- Then runs a callback, that typically redirects and reinitializes a page

### Link to Backend Resources
[Web Dev Bootcamp C9](https://ide.c9.io/learnwithcolt/webdevbootcamp)