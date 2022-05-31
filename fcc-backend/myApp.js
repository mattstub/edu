let express = require('express');
let bodyParser = require('body-parser');
let app = express();

// set up rate limiter: maximum of five requests per minute
let RateLimit = require('express-rate-limit');
let limiter = new RateLimit({
  windowMs: 1*60*1000, // 1 minute
  max: 5
});

// apply rate limiter to all requests
app.use(limiter)

console.log("Hello World");

absolutePath = __dirname + '/views/index.html';
assetsPath = __dirname + "/public";

app.use("/public", express.static(assetsPath));
app.use(bodyParser.urlencoded({ extended: false }));

const timeMiddleware = (req, res, next) => {
  req.time = new Date().toString();
  next();
};

app.get("/", (req, res) => {
//  res.send("Hello Express");
  res.sendFile(absolutePath);
});

app.get("/json", (req, res, next) => {
  if(process.env.MESSAGE_STYLE == "uppercase")
    res.json({ "message" : "HELLO JSON" });
  else
    res.json({ "message" : "Hello json" });
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

app.get('/now', timeMiddleware, (req, res) => {
  res.send({
    time: req.time
  });
});

app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  res.json({ echo : word });
});

app.get("/name", (req, res) => {
  let firstName = req.query.first;
  let lastName = req.query.last;
  res.json({ name : `${firstName} ${lastName}` });
});

app.post('/name', (req, res) => {
  let firstName = req.body.first;
  let lastName = req.body.last;
  res.json({ name : `${firstName} ${lastName}` });
});

const mySecret = process.env['MESSAGE_STYLE']

 module.exports = app;
