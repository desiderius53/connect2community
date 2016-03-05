function getAddressesFromCalendar (map) {
    $.ajax({
        url: "https://clients6.google.com/calendar/v3/calendars/wigandementia@gmail.com/events?calendarId=wigandementia%40gmail.com&singleEvents=true&timeZone=Europe%2FLondon&maxAttendees=1&maxResults=250&sanitizeHtml=true&timeMin=2016-03-05T00%3A00%3A00Z&timeMax=2016-04-15T00%3A00%3A00Z&key=AIzaSyBNlYH01_9Hc5S1J9vuFmu2nUqBZJNAXxs",
        success: function (data) {
            $.each(data.items, function( key, value ) {
                console.log(value.location);
                putLocationOnMap(value.location, map);
            });
        }
    })
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
