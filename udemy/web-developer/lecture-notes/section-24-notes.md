# Introduction to Templates & EJS in Express
- Express will look for pages to render by default in the ` views ` folder
- You can render a page with ` res.render('index.html'); ` command

## EJS
- Enables us to have dynamic pages
- Stands for embedded javascript
``` <%= <embed your javascript here> %> ```
- You can pass variables in from the server with commands
``` res.render('view.ejs', { thing: req.params.thing } ); ```
``` <%= thing %> ```

## EJS Control Flow
- Show examples of control flow in EJS templates
- Write if statements in an EJS file
- Write loops in an EJS file
- Use ` <%= <variable-name> %> ` to plant a dynamic variable
- Use ` <% <random javascript code> %> ` to plant javascript code into the ejs file

## Styles and Partials
- Show how to properly include public assets
  - make a directory to keep stylesheets, scripts and other assets called ` public `
  - serve up directory by linking the file in the server file with ` app.use(express.static('public')); `
- Properly configure our app to use EJS
- Use partials to dry up our code!
  - a way to cut down on repetition of boilerplate
  - can serve up just the code you want between boilerplate then include the partials like
  ` <% include partials/header %> `

  ## Post Requests
  - Write post routes, and test them with Postman
  - Use a form to send a post request
  - Use body parser to get form data
