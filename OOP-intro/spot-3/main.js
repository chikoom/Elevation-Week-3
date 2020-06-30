/*

Add a children property to Animal.
However, instead of initializing the value of children from the constructor parameters, simply set its value to an empty array.
Then, change the giveBirth method to add the name to the children array.
Remember how you access an object's own properties?


*/


class Animal {
  constructor(name, numLegs) {
    this.name = name
    this.numLegs = numLegs
    this.children = []
  }

  giveBirth(name){
    this.children.push(name)
    console.log("Boom. Birthed " + name)
  }
}


const d = new Animal('dog', 4)
d.giveBirth('Kundi')

console.log(d.children)
