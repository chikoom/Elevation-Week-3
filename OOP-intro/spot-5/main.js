/*

Create another static method in Vehicle called calculateMoney

This method should multiply the number of cars sold by 30,000 and output the result.
For instance, if 3 cars were made, the method should print "Made 90,000 dollars"
*/


class Vehicle{
  constructor(x,y,speed){
    this.x = x
    this.y = y
    this.speed = speed
    Vehicle.carsSold++;
  }
  getInfo(){
    console.log("Cars are great")
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
