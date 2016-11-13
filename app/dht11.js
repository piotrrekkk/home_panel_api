var dht = require('dht-sensor');

exports.data = function() {
  var current = dht.read(11, 4);

  return {
    'temperature' : current.temperature,
    'humidity' : current.humidity
  }
}
