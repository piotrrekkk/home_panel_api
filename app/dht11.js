var dht = require('dht-sensor');

var historicalValues = [];

exports.getActualData = function() {
    var sensor = getValue()
    var data;
    data = {
        current: {
            'temperature': sensor.temperature,
            'humidity': sensor.humidity
        },
        historical: {
            historicalValues
        }
    }
    return data;
}

exports.addHistoricalData = function() {
    var value = getValue();
    historicalValues.push(value);
    filterOldValues();
}

exports.getHistoricalData = function() {
    return historicalValues;
}

getValue = function() {
    dht.read(11, 4);
}

filterOldValues = function() {
    historicalValues.splice(a.length - 100);
}