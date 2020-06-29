const animals = ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]
const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"]


const source1 = $('#zoo-template').html()
const template1 = Handlebars.compile(source1);
const zooHTML = template1({animals:animals});
$('.zoo').append(zooHTML)

const source2 = $('#language-template').html()
const template2 = Handlebars.compile(source2);
const langHTML = template2({languages:languages});
$('.languages').append(langHTML)
