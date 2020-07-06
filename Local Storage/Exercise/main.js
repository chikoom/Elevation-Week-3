
let wisdom = JSON.parse(localStorage.getItem('wisdom') || '[]')

let idCounter = localStorage.getItem('idCounter') || 0

const createResult = (text,id) => {
  $('#results').append(`<p data-id="${id}" class="result">${text} <span id="remove-result" style="cursor:pointer">[x]</span></p>`)
}

wisdom.forEach(element => {
  createResult(element.text, element.id)
});



$('#btnSend').on('click', function(){
  
  const inputVal = $('#userInput').val()

  if(inputVal.length > 0) {

    ++idCounter
    localStorage.setItem('idCounter', idCounter)

    createResult(inputVal, idCounter)

    wisdom.push({text: inputVal, id:idCounter})

    if(wisdom.length%2 === 0) {
      localStorage.setItem('wisdom', JSON.stringify(wisdom))
    }
    
    $('#userInput').val('')
  }

  console.log(localStorage)
  
})


$('#btnClear').on('click', function(){
  localStorage.clear()
  $('#results').empty()
})


$('#results').on('click', '#remove-result', function(){
  const itemID = $(this).closest('.result').data().id
  let tempWis = JSON.parse(localStorage.getItem('wisdom') || '[]')
  tempWis = tempWis.filter(item => item.id != itemID)
  wisdom = tempWis
  localStorage.setItem('wisdom', JSON.stringify(wisdom))
  $(this).closest('.result').remove()
  
})
