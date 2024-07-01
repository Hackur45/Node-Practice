const mongoose =  require('mongoose')

//mongo connection url
const mongoUrl = "mongodb://localhost:27017/myDB"


// setup connection
mongoose.connect(mongoUrl)

//Get default connections
//Mongoose maintains a default connection object representing the mongoDB connection

const db = mongoose.connection;      //This will act as the bridge between server and server

db.on('connected',()=>{  
    console.log('connected to database')
})

db.on('disconnected',()=>{
    console.log('disconnected to database')
})

db.on('error',(err)=>{
    console.log('error to database' + err)
})

module.exports={
    db
}