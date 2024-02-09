const express = require('express')
const app = express()
const port = 3000
let root ={root : __dirname}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {
  
  res.sendFile('./home.html', root);
})
app.get('/about', (req, res) => {
  res.sendFile('./about.html', root);
})

app.get('/try/:id', (req, res)=>{
  res.send(`Halo User ke : ${req.params.id} <br/> Alamat anda adalah : ${req.query.alamat}`)
  // res.send(`Alamat anda adalah : `)
})