var express = require('express');
var bodyParser = require('body-parser');

var dht11 = require('./app/dht11');

var app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var router = app.Router();

router.get('/dht11', function(req, res) {
    res.json(dht11.data);
})

router.get('/test', function(req, res) {
    res.json(dht11.sampleData);
})

router.listen(8081, function() {
    console.log('Listening on 8081');
})