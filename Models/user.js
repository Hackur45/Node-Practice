const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum: ['M','F']
    },
    age:{
        type:Number
    },
    address:{
        type:String
    },
    profession:{
        type:String,
        enum:['teacher','doctor','engineer','chef','buisness','army']
    },
    email:{
        type:String,
        unique:true
    }
})

const users = mongoose.model('users',userSchema,"CodeUsers")

module.exports = {
    users
}



