# Introduction to Authentication
- What tools are we using?
  - Passport
  - Passport local
  - Passport local Mongoose
- Walk Through Auth Flow
- Discuss Sessions
  - Express Session

## What Tools Are We Using?
- Passport.js
  - Used a lot in the real world
  - Authentication middleware for Node.js
  - Exteremely flexible and modular
  - Can be ubotrusively dropped in to any express-based web application
  - A comprehensive set of strategies support authentication using a username and password, facebook, twitter, etc.
- Passport-Local
  - Username and password authentication strategy for Passport and Node.js
- Passport-Local Mongoose
  - is a Mongoose plugin that simplifies building username and password login with Passport

## Sessions
- HTTP Requests are a stateless, a one time transaction
- Use a session to make HTTP non-stateless
- logging in plugs some special code into passport.js that implements a session
- logging out removes this special code

## Middleware
- Sits between the beginning of the route, and the end of the route
- It runs before your request is returned
- Authenticate middleware will check your credentials before allowing the code to run

### Authentication - Part 1
- Set up folder structure
- Install needed packages
- Add root route and template
- Add secret route and template

### Authentication - Part 2
- Create User Model
- Configure Passport

### Authentication - Part 3
- Add Register Routes
- Add Register Form

### Authentication - Part 4
- Add Login Routes
- Add Login Form

### Authentication - Part 5
- Add Logout Route
- Add isLoggedIn Middleware

### Helpful Link to Password Authetication
[Devsmash](https://devsmash.com/blog/password-authentication-with-mongoose-and-bcrypt)

