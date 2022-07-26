$.getJSON('https://json.geoiplookup.io/?callback=?', function(data) {
  // console.log(JSON.stringify(data, null, 2));
  var lon = data.longitude;
  var lat = data.latitude;
  getByLocation(lon, lat);
});


function getByLocation(lon, lat) {
  var url ='https://api.seatgeek.com/2/events?client_id=Mjc5OTkxNDl8MTY1ODUzMzQ1OC42ODYwMjA0&lon='+ lon +'&lat='+ lat +'&range=12mi';
  fetch(url)
  .then(function (request) {
      
      return request.json();
  })

  .then(function (data) {
      console.log(data);
      results = JSON.stringify(data);
      theresults = JSON.parse(results);
      for (var i = 0; i < 1; i++) {
        $('#event1').append('<h2>' + data.events[i].short_title+ '</h2>');
        $('#event1').append('<h3>' +  '</h3>');
        $('#event1').append('<h3>' +  '</h3>');
        $('#event1').append('<img src="https://s1.ticketm.net/dam/a/d39/4b18e97c-4544-448e-8163-8c158d23bd39_1325311_RETINA_LANDSCAPE_16_9.jpg">');
        }

      for (var i = 1; i < 2; i++) {
        $('#event2').append('<h2>' + data.events[i].short_title+ '</h2>');
        $('#event2').append('<h3>' +  '</h3>');
        $('#event2').append('<h3>' +  '</h3>');
        $('#event2').append('<img src="https://s1.ticketm.net/dam/a/d39/4b18e97c-4544-448e-8163-8c158d23bd39_1325311_RETINA_LANDSCAPE_16_9.jpg">');
        }2
      for (var i = 2; i < 3; i++) {
        $('#event3').append('<h2>' + data.events[i].short_title+ '</h2>');
        $('#event3').append('<h3>' +  '</h3>');
        $('#event3').append('<h3>' +  '</h3>');
        $('#event3').append('<img src="https://s1.ticketm.net/dam/a/d39/4b18e97c-4544-448e-8163-8c158d23bd39_1325311_RETINA_LANDSCAPE_16_9.jpg">');
        }
  })
}


$('form').submit(function (event) {
  event.preventDefault();
  console.log('This is working');
  var tmApiUrlRoot = 'https://app.ticketmaster.com/discovery/v2/events?apikey=bxA202NsGHlp2jqKOCsAbRGtvfyWnqaJ&locale=*&keyword=';
  var sgApiUrlRoot = 'https://api.seatgeek.com/2/venues?client_id=Mjc5OTkxNDl8MTY1ODUzMzQ1OC42ODYwMjA0&city=';

  var userInputValue = $('#search').val();

  console.log('user input: ', userInputValue);
  var tmApiUrl = tmApiUrlRoot + String(encodeURIComponent(userInputValue));
  var sgApiUrl = sgApiUrlRoot + String(encodeURIComponent(userInputValue));
  console.log(tmApiUrl, sgApiUrl);
  getUserData(tmApiUrl, sgApiUrl);
});

Promise.all([
  fetch('https://app.ticketmaster.com/discovery/v2/events?apikey=bxA202NsGHlp2jqKOCsAbRGtvfyWnqaJ&locale=*&keyword='),
  fetch('https://api.seatgeek.com/2/venues?client_id=Mjc5OTkxNDl8MTY1ODUzMzQ1OC42ODYwMjA0&city=')
])
function getUserData(url) {
  fetch(url)
  .then(function (request) {
      
      return request.json();
  })

  .then(function (data) {
      results = JSON.stringify(data);
      theresults = JSON.parse(results)
      console.log(data)

              // delete previous results once the user submits a new search
              $('#event1').empty();
              $('#event2').empty();
              $('#event3').empty();
    
              // append new results
              for (var i = 0; i < 1; i++) {
                $('#event1').append('<h2>' + theresults._embedded.events[i].name + '</h2>');
                $('#event1').append('<h3>' + theresults._embedded.events[i]._embedded.venues[0].name + '</h3>');
                $('#event1').append('<h3>' + theresults._embedded.events[i].dates.start.localDate + '</h3>');
                $('#event1').append('<img src="' + theresults._embedded.events[i].images[1].url + '">');
                }
              for (var i = 1; i < 2; i++) {
                $('#event2').append('<h2>' + theresults._embedded.events[i].name + '</h2>');
                $('#event2').append('<h3>' + theresults._embedded.events[i]._embedded.venues[0].name + '</h3>');
                $('#event2').append('<h3>' + theresults._embedded.events[i].dates.start.localDate + '</h3>');
                $('#event2').append('<img src="' + theresults._embedded.events[i].images[1].url + '">');
                }
              for (var i = 2; i < 3; i++) {
                $('#event3').append('<h2>' + theresults._embedded.events[i].name + '</h2>');
                $('#event3').append('<h3>' + theresults._embedded.events[i]._embedded.venues[0].name + '</h3>');
                $('#event3').append('<h3>' + theresults._embedded.events[i].dates.start.localDate + '</h3>');
                $('#event3').append('<img src="' + theresults._embedded.events[i].images[1].url + '">');
                }         
      }); 
      
   }


  // adding comment to make this different