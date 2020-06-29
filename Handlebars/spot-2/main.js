console.log('main')

var classData = {
  classmates: [
      {name: "Idan", description: "Always has the answer"},
      {name: "Kundofoni", description: "Quick with a smile"},
      {name: "Taylor", description: "Just Taylor"}
  ]
}

const source = $('#student-template').html()
const template = Handlebars.compile(source)

const newHTML = template(classData);
$('.students').append(newHTML);


