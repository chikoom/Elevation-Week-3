/*

Instantiate a dog instance of Animal. You decide on the name and whether it's paraplegic or not. Console log the dog's name to make sure it worked.

*/


class Animal {
  constructor(type, name, numOfLegs){
    this.type = type
    this.name = name
    this.numOfLegs = numOfLegs
  }

  sayName(){
    console.log(`I'm ${this.name} the ${this.type}`)
  }
}


const d = new Animal('dog', 'Chompi', 4)

d.sayName()
console.log(d.name)