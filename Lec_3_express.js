const express = require('express') //Import the express
const app = express()             //Made the instance of express

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/Cheese',(req,res)=>{
    res.send('Say Cheese.... we are taking photo')
})
app.listen(3000)