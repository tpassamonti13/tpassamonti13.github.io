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
  var xhttp = new XMLHttpRequest();
  xhttp.request("GET", "https://cors.io/?https://api.fortnitetracker.com/v1/profile/{pc}/{Tony.P.21}", true);
  xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
  xhttp.setRequestHeader('Access-Control-Allow-Headers', '*');
  xhttp.setRequestHeader('Access-Control-Allow-Methods', '*');
  xhttp.setRequestHeader('TRN-Api-Key' "3f4fd021-940a-4cee-b3b1-bf4fcc4a29e9");
  xhttp.send();
}
