/*

Add a fuel attribute to your Vehicle class.
Using get and set, make it so that fuel cannot be less than 0, or greater than 150

*/


class Vehicle{
  constructor(x,y,speed,feul){
    this.x = x
    this.y = y
    this._speed = speed
    this._feul = feul
    Vehicle.carsSold++;
  }
  getInfo(){
    console.log("Cars are great")
  }
  get feul(){
    return this._feul
  }
  set feul(liters){
    if(liters > 150 || liters < 0){
      console.log("Feul can't be above 150 or less then 0")
    } else {
      this._feul += liters
    }
  }
  set speed(speed) {
    if (speed < 0) {
        return console.log("Speed must be positive")
    }
    this._speed = speed
  } 

  get speed(){
    return this._speed
  }

  static getInfo() {
    console.log("We've sold " + Vehicle.carsSold + " vehicles.")
  }
  static calculateMoney(){
    const total = parseInt(Vehicle.carsSold) * 30000
    console.log("We've earned " + total + " dollars.")
  }
}




Vehicle.carsSold = 0

const myCar = new Vehicle()
myCar.getInfo()

const otherCar = new Vehicle()

Vehicle.getInfo()

Vehicle.calculateMoney()

const newCar = new Vehicle()

Vehicle.calculateMoney()
