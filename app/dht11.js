var dht = require('dht-sensor');

exports.getActualData = function() {
    var current = dht.read(11, 4);

    if (current.temperature !== 0) {
        return {
            'temperature': current.temperature,
            'humidity': current.humidity
        }
    } else {
        return 'Invalid data'
    }
}

exports.sampleData = function() {
    return {
        'temperature': '22',
        'humidity': '25'
    }
}