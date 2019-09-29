var winStatSession;
var killStatSession;
var kdStatSession;
var winStatLifetime;
var killStatLifetime;
var kdStatLifetime;

$(document).ready(function()
{

});

function retrieveStats()
{
  $.ajax({
    url: 'https://api.fortnitetracker.com/v1/profile/pc/Tony.P.21',
    dataType: json,
    type: "GET",
    success: function(data)
    {
      console.log(data);
    });
}
