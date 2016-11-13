(function() {
    $.get('/dht11', function(res) {
        if(res.temperature) {
            $('#temp').html(res.temperature) + 'st.C';
        }
        $('#hum').html(res.humidity) + '%';
    })
})()