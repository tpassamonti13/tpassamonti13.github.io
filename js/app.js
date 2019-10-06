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
	   url: 'https://www.fortnitescout.com/_code/match-history.php?playerName=Tony.P.21&platform=PlatformPc',
	   type: 'GET',
     success: function(data)
     {
       console.log(data);
     },
     error: function()
     {
       console.log('ERROR');
     }
   });           
}
