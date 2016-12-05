var latPosition;
var longPosition;

function initMap(latPosition, longPosition) {

    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 39.7576958,
            lng: -105.00724629999999
        },
        zoom: 2
    });
}

var information = {
    "lat": "luke",
    "long": "26"
}

var infoString = JSON.stringify(information)

$(document).ready(function() {
    navigator.geolocation.getCurrentPosition(function(position) {
            latPosition = position.coords.latitude;
            longPosition = position.coords.longitude;
            $.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latPosition + ',' + longPosition + '&key=AIzaSyB6mjYhp5ca_RPpOdHu_Ul7E-YY6BYzmms')
                .done(function(data) {
                    console.log(data);
                    console.log(latPosition, longPosition);
                })
                .fail(function(error) {
                    console.log(error);
                })
            var panPoint = new google.maps.LatLng(latPosition, longPosition);
            map.setZoom(17);
        })
        //
    $('#trackbutton').on('click', function() {
        $.post('http://localhost:3000/comments', "hi")
        console.log(information);
        initMap()

    })
    $('#showbutton').on('click', function() {
        $.get('http://localhost:3000/puppies')
            .done(function(data) {
                console.log(data);
            })
    })



    function initMap() {
        var myLatLng = {
            lat: latPosition,
            lng: longPosition
        };

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 17,
            center: myLatLng
        });

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Hello World!'
        });
    }

})
