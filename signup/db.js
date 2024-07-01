require('dotenv').config();
const mongoose = require('mongoose')


const MONGODB_URL = process.env.MONGODB_URL
mongoose.connect(MONGODB_URL)

const db = mongoose.connection;

db.on('connected',()=>{
    console.log(`data base connected`)
})

db.on('disconnected',()=>{
    console.log(`data base disconnected`)
})

db.on('error',(err)=>{
    console.log(`error occured to data base`+ err)
})

module.exports = db
