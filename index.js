var express = require('express');
var dht11 = require('.app/dht11');

var app = express();

app.use(express.static('public'));

app.get('/dht11', function(req, res) {
  res.json(dht11.data);
}

app.listen(8081, function() {
  console.log('Listening on 8081');
});
