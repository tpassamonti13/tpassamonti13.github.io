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
	   type: 'GET',
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
