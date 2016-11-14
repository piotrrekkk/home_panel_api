(function() {
    $.get('/dht11', function(res) {
        $('#temp').html(res.current.temperature + 'st.C');
        $('#hum').html(res.current.humidity + '%');

        createHumidityChart(res.historical)
    })



    // humidity chart
    function createHumidityChart(data) {
        var humidity_data = _.pluck(data, 'humidity')
        var humidity_chart_container = document.getElementById("humidity_chart");
        var humidity_chart = Chart.Line(ctx, {
            data: humidity_data
        });
    }
})()