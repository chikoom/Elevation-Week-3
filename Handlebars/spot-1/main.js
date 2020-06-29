console.log('main')

const items = [
  { item: "cheese", price: 15 },
  { item: "arak", price: 68 },
  { item: "hummus", price: 15 },
  { item: "pita", price: 5 }
]

const source = $('#store-template').html()
const template = Handlebars.compile(source)

for(let item of items){
  const newHTML = template(item);
  $('.items').append(newHTML);
}
