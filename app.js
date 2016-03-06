function getAddressesFromCalendar (map,calendars) {
    $.each(calendars, function(key,value) {
        $.ajax({
            url: value,
            success: function (data) {
                $.each(data.items, function( key, value ) {
                    console.log(value.location);
                    putLocationOnMap(value.location, map);
                });
            }
        });
    });
}

function addNewCalendar(calendars,calendar){
    calendars.push(calendar);
    console.log(calendar.name + " and colour :" + calendar.colour);
}

function putLocationOnMap (address, map) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode( {'address': address}, function(results, status) {
            console.log("looking for location "+address);
            var marker1 = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
            console.log(results[0].geometry.location);
    });
}
