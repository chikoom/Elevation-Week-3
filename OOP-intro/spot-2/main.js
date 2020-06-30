/*

Create a Human class. 
It should have three properties: name, age, and isFriendly - a string, number, and boolean. 
Then, create an instance of a human, and print out all its properties.


*/


class Human {
  constructor(name, age, isFriendly){
    this.name = name
    this.age = age
    this.isFriendly = isFriendly
  }
}


const h = new Human('Idan', '37', true)

console.log(h.name)
console.log(h.age)
console.log(h.isFriendly)