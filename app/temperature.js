var sensor = require('./sensors/dht11');

var data = {
	values: [],
	min: {},
	max: {}
};

exports.getData = function() {
	return data;	
}

exports.refreshValues = function() {
	var currentValues = sensor.getActualData();
	
	if( currentValues && currentValues.temperature && currentValues.humidity ) {
		currentValues.id = data.values.length;
		data.values.push(currentValues);
		updateMinMax(currentValues);
	}
	if(data.values.length>50) {
		optimizeArray();
	}
}

function updateMinMax(currentValues) {
	if(!data.min.temperature || currentValues.temperature < data.min.temperature) {
		data.min.temperature = currentValues.temperature		
	}
	if(!data.min.humidity || currentValues.humidity < data.min.humidity) {
		data.min.humidity = currentValues.humidity
	}

	if(!data.max.temperature || currentValues.temperature > data.max.temperature) {
		data.max.temperature = currentValues.temperature
	}
	if(!data.max.humidity || currentValues.humidity > data.max.humidity) {
		data.max.humidity = currentValues.humidity
	}
}

function optimizeArray() {
	var tmp = [];
	var i = data.values.length - 1;
	
	while( i>0 ) {
		if(data.values && data.values[i]) {
			tmp.unshift(data.values[i]);
		}
		i=i-2;
	}
	data.values = tmp;
}
