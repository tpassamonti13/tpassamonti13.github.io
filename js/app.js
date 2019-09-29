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
    url: 'https://api.fortnitetracker.com/v1/profile/{pc}/{Tony.P.21}',
    headers:
    { 
      "TRN-Api-Key":"3f4fd021-940a-4cee-b3b1-bf4fcc4a29e9" 
    },
    dataType: "json",
    type: "GET",
    success: function(data)
    {
      console.log(data);
    }
  });
}
