var dht = require('dht-sensor');

var historicalValues = [];

exports.getActualData = function() {
    var sensor = getValue();
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
    console.log('temperature', getValue().temperature, parseInt(getValue().temperature) === 0);
    console.log('humidity', getValue().humidity, parseInt(getValue().humidity) === 0);

    if (!getValue() || parseInt(getValue().temperature) === 0 || parseInt(getValue().humidity) === 0) {
        return;
    }

    var now = new Date();

    var value = {
        'temperature': getValue().temperature,
        'humidity': getValue().humidity,
        'time': now.getHours() + ':' + now.getMinutes()
    }

    historicalValues.push(value);
    filterOldValues();
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