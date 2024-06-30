const express = require('express')
const {users} = require('../Models/user')
const db = require('./db');
const bodyParser = require('body-parser');

const app = new express();
app.use(bodyParser.json());


app.get('/',(req,res)=>{
    res.send(`This is the self made user architecture\nPlease port to '/users'`)
})

app.get('/fetchdata/:workType',async (req,res)=>{
    try{
        const workType = req.params.workType;
        const data = await users.find({profession:workType});
        res.json(data);
    }catch(err){
        res.send(err);
    }
})


const userRoutes = require('./../routes/userRoutes')
app.use('/users',userRoutes)

app.listen(3000,()=>{
    console.log('Listening to port 3000')
})