

const personCards = $('#person-cards-template').html()
const template = Handlebars.compile(personCards)

$.ajax({
  url: 'https://randomuser.me/api/?results=50',
  dataType: 'json',
  success: function(data) {

    const cardHTML = template({persons:data.results})
    $('#personsList').append(cardHTML)

    console.log(data);
  }
})


