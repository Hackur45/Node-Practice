const mongoose = require('mongoose')

const url = "mongodb://localhost:27017/myDB"

mongoose.connect(url)

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
