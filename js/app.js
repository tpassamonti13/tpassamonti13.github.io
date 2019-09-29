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
   $.ajax(
	 {
	   url: 'https://api.fortnitetracker.com/v1/profile/pc/Tony.P.21',
	   dataType: "application/json",
	   type: 'GET',
     headers:
     {
	'Access-Control-Allow-Origin: *',
	 "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
"Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
       'TRN-API-Key' : '3f4fd021-940a-4cee-b3b1-bf4fcc4a29e9'
     },
     success: function(data)
     {
       console.log(data);
	     $('#winStatLifetime').html(data.stats.p2.top1.value);
     },
     error: function()
     {
       console.log('ERROR');
     }
   });           
}
