const validator = require('validator');
const faker = require('faker');
//Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)

console.log(validator.isEmail('shoobert@dylan'))

//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale

console.log(validator.isMobilePhone('786-329-9958','en-US'))

//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!"
//Ultimately, it should print "im so excited"
let lowercaseText = validator.normalizeEmail(text,{all_lowercase:true})
let sanitizedText = validator.blacklist(lowercaseText, blacklist)

console.log(sanitizedText)

const makeHuman = number => {
  for(let i = 0 ; i <= number ; i++){
    let randomName = faker.name.findName();
    console.log(faker.fake("{{name.firstName}}, {{image.avatar}}, {{company.companyName}}"));

  }
}


makeHuman(10)
