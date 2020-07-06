const cTypes = require('./consts')

const handleComplaints = complaint => {
  if(complaint.type === cTypes.FINANCE)
    console.log(`Money doesn't grow on trees, you know.`)
  if(complaint.type === cTypes.WEATHER)
    console.log(`It is the way of nature. Not much to be done.`)
  if(complaint.type === cTypes.EMOTIONS)
    console.log(`It'll pass, as all things do, with time.`)
}

module.exports.handleComplaint = handleComplaints