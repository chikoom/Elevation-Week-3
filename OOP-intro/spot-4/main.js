/*

create a Vehicle class.
It should have the following number properties:
x
y
speed
As well as a getInfo method. For now, this method should just print "Cars are great"
*/


class Vehicle{
  constructor(x,y,speed){
    this.x = x
    this.y = y
    this.speed = speed
  }
  getInfo(){
    console.log("Cars are great")
  }
}

const myCar = new Vehicle()
myCar.getInfo()