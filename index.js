var express = require('express');
var bodyParser = require('body-parser');

var temp = require('./app/temperature');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/dht11', function(req, res) {
	var data =  temp.getData();
    	res.json(data);
})

setInterval(temp.refreshValues, 1000);

app.listen(3000, function() {
    console.log('Listening on 8081');
})
