(function() {
    $.get('/dht11', function(res) {
        $('#temp').html(res.temperature);
        $('#hum').html(res.humidity);
    })
})()