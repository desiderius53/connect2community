// var mark = ['A','B','C','D','E','F','G''H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; //this is a horrible way to do this

 function getAddressesFromCalendar (map,calendars) {
    $.each(calendars, function(key,value) {
        $.ajax({
            url: value.url,
            success: function (data) {
                var i =0;
                $.each(data.items, function( key, value ) {
                    console.log(value.location);
                    putLocationOnMap(value.location, map,mark[i],'green');
                    i++;
                });
            }
        });
    });
}

function addNewCalendar(calendars,calendar){
    calendars.push(calendar);
    console.log(calendar.name + " and colour :" + calendar.colour);
}

function putLocationOnMap (address, map, mark, colour) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode( {'address': address}, function(results, status) {
            console.log("looking for location "+address);
            console.log("results are:"+results);
            var marker1 = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
                //icon: 'assets/Google_Maps_Markers/'+ colour +'_Marker' + mark + '.png'
                icon: 'assets/Google_Maps_Markers/green_MarkerA.png'
            });
                console.log('assets/Google_Maps_Markers/green_MarkerA.png');
            console.log(results[0].geometry.location);
    });
}
