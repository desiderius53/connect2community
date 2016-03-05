<?php


$url = 'https://clients6.google.com/calendar/v3/calendars/wigandementia@gmail.com/events?calendarId=wigandementia%40gmail.com&singleEvents=true&timeZone=Europe%2FLondon&maxAttendees=1&maxResults=250&sanitizeHtml=true&timeMin=2016-03-05T00%3A00%3A00Z&timeMax=2016-04-15T00%3A00%3A00Z&key=AIzaSyBNlYH01_9Hc5S1J9vuFmu2nUqBZJNAXxs';
$ch = curl_init();
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL,$url);
$result=curl_exec($ch);
curl_close($ch);

$json = json_decode($result, true);

foreach($json['items'] as $item) {
    echo "<h1>{$item['summary']}</h1>";
    echo "<h2>{$item['description']}</h2>";
    echo "<h4>{$item['start']['dateTime']} - {$item['end']['dateTime']}</h4>";
    echo "<hr>";
}

?>
