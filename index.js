var express = require('express');
var bodyParser = require('body-parser');

var dht11 = require('./app/dht11');

var app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/dht11', function(req, res) {
    var data;

    do {
        data = dht11.getActualData();
    } while (data.temperature);

    res.json(data);
})

app.get('/test', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
})

app.listen(8081, function() {
    console.log('Listening on 8081');
})