(function() {
    $.get('/dht11', function(res) {
        $('#temp').html(res.current.temperature + 'st.C');
        $('#hum').html(res.current.humidity + '%');
    })
})()