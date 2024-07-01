const express = require('express')
const {users} = require('../Models/user')
const db = require('./db');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = new express();
app.use(bodyParser.json());


app.get('/',(req,res)=>{
    res.send(`This is the self made user architecture\nPlease port to '/users'`)
})

app.get('/fetchdata/:workType',async (req,res)=>{
    try{
        const workType = req.params.workType;
        const data = await users.find({profession:workType});
        if(data.length === 0){
            console.log('Data not found')
            return res.status(404).json({error:`data not found`})    
        }
        res.json(data);
        console.log('Data fetched')
    }catch(err){
        res.send(err);
    }
})


const userRoutes = require('./../routes/userRoutes')
app.use('/users',userRoutes)


const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log('Listening to port 3000')
})