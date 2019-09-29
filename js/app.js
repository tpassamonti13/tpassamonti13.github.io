var winStatSession;
var killStatSession;
var kdStatSession;
var winStatLifetime;
var killStatLifetime;
var kdStatLifetime;

$(document).ready(function()
{
  retrieveStats();
});

function retrieveStats()
{
  $.ajax({
    url: 'https://fortnite-public-api.theapinetwork.com/prod09/users/id?username=Tony.P.21',
    headers: 
    {
      'Access-Control-Allow-Origin' : '*',
    },
    dataType: "json",
    type: "GET",
    success: function(data)
    {
      console.log(data);
    }
  });
}
