var dht = require('dht-sensor');

exports.getActualData = function() {
    var current = dht.read(11, 4);

    if (current.temperature !== 0) {
        return {
            'temperature': current.temperature,
            'humidity': current.humidity
        }
    } else {
        return {
            'temperature': 0,
            'humidity': 0
        }
    }
}

exports.sampleData = function() {
    return {
        'temperature': '22',
        'humidity': '25'
    }
}