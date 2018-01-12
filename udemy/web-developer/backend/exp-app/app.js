const tools = require('tools.js');
const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

// ==========
//   Routes
// ==========
app.get('/', (req, res) => { res.send('Hi there, welcome to my assignment!'); console.log('request - root'); });
app.get('/speak/:animal', (req, res) => { res.send(tools.checkParameter(req.params.animal)); });
app.get('/repeat/:sound/:count', (req, res) => { res.send(tools.repeatResponse(req.params.sound, req.params.count)); });
app.get('*', (req, res) => { res.send(`Sorry, page not found! What are you doing with your life?`); });

// ================
//   Start Server
// ================
app.listen(process.env.PORT, process.env.IP, () => { console.log('Server has started'); });