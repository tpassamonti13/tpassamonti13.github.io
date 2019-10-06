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
	 url: 'https://cors-anywhere.herokuapp.com/https://www.fortnitescout.com/_code/match-history.php?playerName=Tony.P.21&platform=PlatformPc',
	   type: 'GET',
     success: function(data)
     {
       	     $('#winStatSession').html(data[6].winCount);
	     $('#killStatSession').html(data[6].killCount);
	     $('#kdStatSession').html((data[6].killCount / data[6].matchCount));
     }
   });           
}
