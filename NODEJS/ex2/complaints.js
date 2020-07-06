const cTypes = require('./consts')
const complaintHandler = require('./complaintsHandler')

let complaint1 = {
  text: "I'm not getting enough money",
  type: cTypes.FINANCE
}

let complaint2 = {
  text: "My salary hasn't come in yet",
  type: cTypes.WEATHER
}

let complaint3 = {
  text: "I'm always full of energy",
  type: cTypes.EMOTIONS
}

complaintHandler.handleComplaint(complaint1) //should print "Money doesn't grow on trees, you know."
complaintHandler.handleComplaint(complaint2) //should print "Money doesn't grow on trees, you know."
complaintHandler.handleComplaint(complaint3) //should print "It'll pass, as all things do, with time."