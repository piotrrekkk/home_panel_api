var dht = require('dht-sensor');
var _ = require('underscore');

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
    var now = new Date();

    var value = {
        'temperature': getValue().temperature,
        'humidity': getValue().humidity,
        'time': now.getHours() + ':' + now.getMinutes()
    }

    historicalValues.push(value);
    filterValues();
}

exports.getHistoricalData = function() {
    return historicalValues;
}

function getValue() {
    return dht.read(11, 4);
}

function filterValues() {
    historicalValues = _.filter(historicalValues, function(item) {
        return item.temperature !== 0 && item.humidity !== 0;
    })

    historicalValues = historicalValues.splice(historicalValues.length - 100);
}