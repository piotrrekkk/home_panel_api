(function() {
    $.get('/dht11', function(res) {
        $('#temp').html(res.current.temperature + 'st.C');
        $('#hum').html(res.current.humidity + '%');

        createHumidityChart(res.historical)
        createTemperatureChart(res.historical)
    })



    // humidity chart
    function createHumidityChart(data) {
        var humidity_data = _.pluck(data, 'humidity');
        var time = _.pluck(data, 'time');
        var humidity_chart_container = document.getElementById("humidity_chart");

        var humidity_chart = Chart.Line(humidity_chart_container, {
            data: {
                labels: time,
                datasets: [{
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    label: "Wilgotność [%]",
                    data: humidity_data
                }]
            }
        });
    }

    // temperature chart
    function createTemperatureChart(data) {
        var temperature_data = _.pluck(data, 'temperature');
        var time = _.pluck(data, 'time');
        var temperature_chart_container = document.getElementById("temperature_chart");

        var temperature_chart = Chart.Line(temperature_chart_container, {
            data: {
                labels: time,
                datasets: [{
                    label: "Temperature [st.C]",
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    data: temperature_data
                }]
            }
        });
    }
})()