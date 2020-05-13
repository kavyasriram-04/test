const express = require('express')
const app = express()
const PORT = process.env.PORT || 7271


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3003, function () {
  console.log('Example app listening on port 3003!')
})
