


class Animal {
  constructor(name, type, feeder) {
      this.name = name
      this.type = type
      this.feeder = feeder
  }

  _consume(food) {
      console.log("Just consumed " + food + ". Feels good.")
  }

  eat() {
      const food = this.feeder.getFood(this.type)
      this._consume(food)
  }
}


class LuxuryFeeder {
  getFood(animalType) {
      if (animalType == "lion") {
          return "chia seeds"
      }
      if (animalType == "elephant") {
          return "peanuts"
      }

      return "scraps"
  }
}

class CheapFeeder {
  getFood(animalType) {
      return "scraps"
  }
}


function createAnimal(name, animalType, areWePoor){
  const feeder  = (areWePoor) ? new CheapFeeder(animalType) : new LuxuryFeeder(animalType)
  return new Animal(name, animalType, feeder)
}

let weArePoor = true 

const lion1 = createAnimal('mufasa', 'lion', weArePoor)
const elephant1 = createAnimal('dambo', 'elephant', weArePoor)

weArePoor = false

const lion2 = createAnimal('richfasa', 'lion', weArePoor)
const elephant2 = createAnimal('richdambo', 'elephant', weArePoor)

lion1.eat()
elephant1.eat()
lion2.eat()
elephant2.eat()
