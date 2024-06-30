const db = require('./db')
const {Person} = require('./Models/person')  // curly braces {} are used to destructure the data
const express = require('express')



const app = new express();
app.use(express.json());        //Middleware is important 

app.get('/',(req,res)=>{
    res.send("This is server.js")
})

app.post('/person',async (req,res)=>{
    try{
        const data = req.body
        const newperson = new Person(data);

        const response = await newperson.save();

        console.log('data saved');
        res.status(200).json(response)
    }catch(err){
        console.error(err);
        res.status(500).json({error:'Internal server error'})
    }
})


app.listen(3000,()=>{
    console.log('Listening port 3000')
})

