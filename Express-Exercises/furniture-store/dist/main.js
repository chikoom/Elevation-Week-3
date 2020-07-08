let money = 500

$('#money').text(money)


$('#btn-priceCheck').on('click', function(){
  const userInput = $('#fld-priceCheck').val()
  $.get(`/priceCheck/${userInput}`, function(data){
    $('#result').empty()
    $('#result').append(`The price is ${data.price}`)
  })
})

$('#btn-buy').on('click', function(){
  const userInput = $('#fld-buy').val()
  let cost = 0

  $.get(`/priceCheck/${userInput}`, function(data){
    cost = data.price
    if(money > cost){
      money -= cost
      $.get(`/buy/${userInput}`, function(data){
        $('#result').empty()
        $('#result').append(`Congratulations, you've just bought ${data.item.name} for ${data.item.price}. There are ${data.item.inventory} left now in the store.`)
      })

    }else{
      $('#result').empty()
      $('#result').append(`You don't have enough money - get a job`)
    }

  })

})

let chairPrice = 0

setInterval(function(){
  $.get(`/priceCheck/chair`, function(data){
    
    if(chairPrice > data.price){
      $.get(`/buy/chair`, function(data){
        console.log(`just bought a chair for ${data.item.price}`)
      })
    }else{
      chairPrice = data.price
      console.log(`chair price is ${data.price} still waiting`)
    }
  })
},3000)