const urllib = require('urllib')
const $ = require('jquery')

$('#color-change').on('click', function(){
  $(this).css('background-color', '#f39c12')
})

$.ajax({
  method: "GET",
  url: `http://data.nba.net/10s/prod/v1/2016/players.json
  `,
  success: function (data) {
    for(player of data.league.standard){
      //console.log(player)
      $('#NBA-Players').append($(`<p>${player.firstName} ${player.lastName}</p>`))
    }
    
  },
  error: function (xhr, text, error) {
      console.log(text)
  }
})

urllib.request('http://data.nba.net/10s/prod/v1/2016/players.json', function(err, response){
    console.log(response.toString())
})