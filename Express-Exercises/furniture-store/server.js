const express = require('express')
const path = require('path')

const app = express()

const store = [
  { name: "table", inventory: 3, price: 800 },
  { name: "chair", inventory: 16, price: 120 },
  { name: "couch", inventory: 1, price: 1200 },
  { name: "picture frame", inventory: 31, price: 70 }
]

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/',(req,res)=>{
  res.send('hello')
})

app.get('/priceCheck/:name',(req,res)=>{

  for(let item of store){
    if(item.name === req.params.name){
      res.send({price:item.price})
      return
    }
  }
  res.send({price:null})
})

app.get('/buy/:name',(req,res)=>{

  for(let item of store){
    if(item.name === req.params.name){
      item.inventory--
      res.send({item})
      return
    }
  }
  res.send({price:null})
})

app.get('/sale',(req,res)=>{
  if(req.query.admin==='true'){
    for(item of store){
      if(item.inventory > 10){
        item.price = Math.floor(item.price*0.5)
      }
    }
  }
  res.send(store)
})

const PORT = 3000
app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`)
})