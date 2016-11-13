(function() {
    $.get('/dht11', function(res) {
            $('#temp').html(res.temperature) + 'st.C';
        $('#hum').html(res.humidity) + '%';
    })
})()