function initMap(lat, longPosition) {

    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 39.7576958,
            lng: -105.00724629999999
        },
        zoom: 2
    });
}



$(document).ready(function() {
    navigator.geolocation.getCurrentPosition(function(position) {
        var latPosition = position.coords.latitude;
        var longPosition = position.coords.longitude;
        $.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latPosition + ',' + longPosition + '&key=AIzaSyB6mjYhp5ca_RPpOdHu_Ul7E-YY6BYzmms')
            .done(function(data) {
                // console.log(data);
                console.log(latPosition, longPosition);
            })
            .fail(function(error) {
                console.log(error);
            })
        var panPoint = new google.maps.LatLng(latPosition, longPosition);
        map.setZoom(2);
        // var currentdate = new Date();
        // var datetime = "Last Sync: " + currentdate.getDate() + "/" +
        //     (currentdate.getMonth() + 1) + "/" +
        //     currentdate.getFullYear() + " @ " +
        //     currentdate.getHours() + ":" +
        //     currentdate.getMinutes() + ":" +
        //     currentdate.getSeconds();
        console.log(new Date().toLocaleString());
        var latLong = {
            lat: latPosition,
            long: longPosition
        }
        var information = {
            position: latLong,
            "time": new Date().toLocaleString()
        }


        var infoString = JSON.stringify(information)

        //
        $('#trackbutton').on('click', function() {
            $.ajax({
                    url: 'http://localhost:3000/comments',
                    type: "POST",
                    data: infoString,
                    dataType: "json",
                    contentType: "application/json",
                    success: function(result) {
                        console.log(result);
                        initMap(latPosition, longPosition)
                    }
                })
                // $.post('http://localhost:3000/comments', information, function(result) {
                //     console.log(result);
                //     initMap()
                // })
        })
        $('#showbutton').on('click', function() {
            $.get('http://localhost:3000/puppies')
                .done(function(data) {
                    console.log(data);
                })
        })
    })



    function initMap(latPosition, longPosition) {
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
