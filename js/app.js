var winStatSession;
var killStatSession;
var kdStatSession;

// Lifetime stats for PC
var winStatLifetimePC;
var killStatLifetimePC;
var kdStatLifetimePC;

// Lifetime stats for Xbox
var winStatLifetimeXbox;
var killStatLifetimeXbox;
var kdStatLifetimeXbox;

// Total lifetime stats
var winStatLifetimeTotal;
var killStatLifetimeTotal;
var kdStatLifetimeTotal;

var currentWinStatSession = 0;
var currentKillStatSession = 0;
var currentKdStatSession = 0;

var currentWinStatLifetime = 0;
var currentKillStatLifetime = 0;
var currentKdStatLifetime = 0;

$(document).ready(function()
{
  setTimeout(function(){
     retrieveStats();
	
     $('#winsBoxSession').css({'height' : '90px'});
     $('#killsBoxSession').css({'height' : '90px'});
     $('#kdBoxSession').css({'height' : '90px'});

     $('#winsBoxLifetime').css({'height' : '90px'});
     $('#killsBoxLifetime').css({'height' : '90px'});
     $('#kdBoxLifetime').css({'height' : '90px'});
	   
     $('#logo').fadeIn(800);
     $('.boxTitle').fadeIn(800);
  }, 2000);

  setInterval(function()
  {
    retrieveStats();
  }, 60000)
});

function retrieveStats()
{
  $.ajax(
  {
    url: 'https://cors-anywhere.herokuapp.com/https://api.fortnitetracker.com/v1/profile/pc/Tony.P.21',
    type: 'GET',
    headers:
    {
      'TRN-API-Key' : '3f4fd021-940a-4cee-b3b1-bf4fcc4a29e9'
    },
    success: function(data)
    {
      winStatSession = parseInt(data.recentMatches[0].top1);
      killStatSession = parseInt(data.recentMatches[0].kills);
      kdStatSession = (killStatSession / parseInt(data.recentMatches[0].matches)).toFixed(2);

      winStatLifetimePC = parseInt(data.lifeTimeStats[8].value);
      killStatLifetimePC = parseInt(data.lifeTimeStats[10].value);
      kdStatLifetimePC = parseFloat(data.lifeTimeStats[11].value);

      $.ajax(
      {
        url: 'https://cors-anywhere.herokuapp.com/https://api.fortnitetracker.com/v1/profile/xbox/Tony.P.21',
        type: 'GET',
        headers:
        {
          'TRN-API-Key' : '3f4fd021-940a-4cee-b3b1-bf4fcc4a29e9'
        },
        success: function(data)
        {
          winStatLifetimeXbox = parseInt(data.lifeTimeStats[8].value);
          killStatLifetimeXbox = parseInt(data.lifeTimeStats[10].value);
          kdStatLifetimeXbox = parseFloat(data.lifeTimeStats[11].value);
        },
        complete: function()
        {

            winStatLifetimeTotal = winStatLifetimePC + winStatLifetimeXbox;
            killStatLifetimeTotal = killStatLifetimePC + killStatLifetimeXbox;
            kdStatLifetimeTotal = ((kdStatLifetimePC + kdStatLifetimeXbox) / 2).toFixed(2);

            if (currentWinStatSession !=  winStatSession)
            {
              currentWinStatSession = winStatSession;

              $('#winStatSession').hide().html(winStatSession).fadeIn(1000);
            }
            if (currentKillStatSession !=  killStatSession)
            {
              currentKillStatSession = killStatSession;

              $('#killStatSession').hide().html(killStatSession).fadeIn(1000);
            }
            if (currentKdStatSession !=  kdStatSession)
            {
              currentKdStatSession = kdStatSession;

              $('#kdStatSession').hide().html(kdStatSession).fadeIn(1000);
            } 

            if (currentWinStatLifetime !=  winStatLifetimeTotal)
            {
              currentWinStatLifetime = winStatLifetimeTotal;

              $('#winStatLifetime').hide().html(winStatLifetimeTotal).fadeIn(1000);
            }
            if (currentKillStatLifetime !=  killStatLifetimeTotal)
            {
              currentKillStatLifetime = killStatLifetimeTotal;

              $('#killStatLifetime').hide().html(killStatLifetimeTotal).fadeIn(1000);
            }
            if (currentKdStatLifetime !=  kdStatLifetimeTotal)
            {
              currentKdStatLifetime = kdStatLifetimeTotal;

              $('#kdStatLifetime').hide().html(kdStatLifetimeTotal).fadeIn(1000);
            }     
        }
      });
    }
  });           
}
