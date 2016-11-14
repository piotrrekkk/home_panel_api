var dht = require('dht-sensor');

var historicalValues = [];

exports.getActualData = function() {
    var sensor = dht.read(11, 4);
    var data;
    data = {
        'current': {
            'temperature': sensor.temperature,
            'humidity': sensor.humidity
        },
        'historical': historicalValues
    }
    return data;
}

exports.addHistoricalData = function() {
    var now = new Date();
    var value = {
        'temperature': getValue().temperature,
        'humidity': getValue().humidity,
        'time': now.getHours() + ':' + now.getMinutes()
    }
    console.log(getValue().temperature, getValue().humidity);
    if (getValue().temperature != 0 && getValue().humidity != 0) {
        console.log('not zero values', getValue().temperature, getValue().humidity);
        historicalValues.push(value);
        filterOldValues();
    }
}

exports.getHistoricalData = function() {
    return historicalValues;
}

function getValue() {
    return dht.read(11, 4);
}

function filterOldValues() {
    historicalValues = historicalValues.splice(historicalValues.length - 100);
}