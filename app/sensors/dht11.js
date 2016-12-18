var dht = require('dht-sensor');

exports.getActualData = function() {
    var now = new Date();
    var sensor = getValue();
    	return {
		'time': (now.getHours()+1) + ':' + addZero(now.getMinutes()),
		'temperature': sensor.temperature,
        	'humidity': sensor.humidity
	}
}

function getValue() {
    return dht.read(11, 4);
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
