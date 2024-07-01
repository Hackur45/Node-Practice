const mongoose = require('mongoose')
require('dotenv').config();
// const url = `mongodb+srv://gurjarmandar63:mandar45@cluster0.ipfzhi4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const DB_mongoUrl = process.env.DB_mongoUrl
mongoose.connect(DB_mongoUrl)

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
