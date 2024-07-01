require('dotenv').config();
const mongoose = require('mongoose')


// mongoose.connect(MONGODB_URI)

const MONGODB_URI = process.env.MONGODB_URI


async function connectToDatabase(MONGODB_URI){
    await mongoose.connect(MONGODB_URI)
}
connectToDatabase(MONGODB_URI)

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

module.exports =  db
