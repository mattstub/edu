# Deploying to Heroku
- Not a good practice to only have 1 copy of your program that you are serving.
  - This is why deploying an app off Cloud9 is not a good idea, it is more of a development server
- Heroku is a service where you can rent cloud based servers to deploy apps
  - There are plenty of other choices
  - Heroku has a free plan and plenty of robust paid plans
- When you deploy an application, you are running the app on a server somewhere, 24/7

## Deploying a Simple App
- When installing dependencies, it is critical that you utilize `npm install --save` so that the server knows what to install
  - If we are missing something, the deployment server won't know to install it and the app won't work properly
  - package.json is the recipe for your application
- We use git to tell Heroku what to take for the application
- Utilize `heroku create` from the CLI
  - this creates a generic application and random name which can be changed later
  - can point your herokuapp back to your own domain as well
  - adds a remote repository to your git
    - this is how you tell heroku what code you actually want to run
    - allows you to work locally without having it run on the production server
- when you have an issue with herokuapp it doesn't expose errors to forward facing site
  - they keep logs that can be accessed via logs in the CLI with `heroku logs` in the directory
- Create a start script so Heroku knows how to launch, much like running `node app.js` locally
  - place the start script inside the package.json
  - inside scripts tag place `'start': 'node app.js'` under the test script
  - this will tell heroku to launch this command each time new code is pushed up to Heroku

## Working with MLab - MongoLab
A hosted MongoDB databse on a separate server that we can make an API call too
- Alter the url to instead of locally as we have it called out
` mongoose.connect("mongodb://localhost/yelpcamp", {useMongoClient: true}); `

## Environment Variables
- Keep your testing data separate from production
  - Don't mix databases
- Using config variables or environment variables allows you to hide API-KEYs and Password/Username