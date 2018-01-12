const express = require('express');
const app = express();
const request = require('request');

app.use(express.static('public'));
app.set('view engine', 'ejs');

const api = 'https://www.omdbapi.com/?s='
const key = '&apikey=thewdb';

app.get('/', (req, res) => { res.render('search'); });

app.get('/results', (req, res) => {
    let url = api + req.query.search + key;
    request(url, (error, response, body) => {
        if(!error && response.statusCode == 200) {
            let data = JSON.parse(body);
            res.render('results', { data: data });
        }
    });
});

app.listen(process.env.PORT, process.env.IP, () => { console.log(`Movie App Started`) });