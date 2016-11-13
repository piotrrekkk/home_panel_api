var dht = require('dht-sensor');

exports.getActualData = function() {
    var current = dht.read(11, 4);

    return {
        'temperature': current.temperature,
        'humidity': current.humidity
    }
}

exports.sampleData = function() {
    return {
        'temperature': '22',
        'humidity': '25'
    }
}