const express = require('express')
const app = express()
const path = require('path')

const users = {
  tilda: "You've done a wonderful job",
  riva: "You need to improve your form, but good perseverance",
  jeremy: "You're incredible"
}

const data = {
  8112: {
      title: "Name of the Wind",
      author: "Patrick Rothfuss"
  },
  9121: {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger"
  },
  1081: {
      title: "The Giver",
      author: "Lois Lowry"
  }
}

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/', (req, res) => {
  console.log(`Got a GET request on /`)
  res.send('OH OH OH OH')
})

app.get('/life', (req, res) => {
  console.log(`Got a GET request on /life`)
  res.send('42')
})

app.get('/landing/:username', (req, res) => {
  console.log(`Got a GET request on /landing`)
  res.send(`Hello ${req.params.username}`)
})

app.get('/user/:username', (req, res) => {
  console.log(`Got a GET request on /user`)
  res.send(users[req.params.username])
})

app.get('/details', (req, res) => {
  console.log(`Got a GET request on /details`)
  res.send(req.query)
})

app.get('/books/:bookID', (req, res) => {
  if(data[req.params.bookID]){
    res.send(data[req.params.bookID])
  }else{
    res.send('Cannot find book')
  }
  
})



const PORT = 3000
app.listen(PORT, () => {
  console.log(`Express server running & listening on port ${PORT}`)
})