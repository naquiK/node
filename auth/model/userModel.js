const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true , "Username is required"],
        unique:[true , "Username is already taken"],
    },
    email:{
        type:String,
        required:[true , "Email is required"],
        unique:[true , "Email must be unique"],
        toLowerCase:true
    },
    password:{
        type:String,
        required:[true , "Password is required"]
    },
    role:{
        type:String,
        default:"user"
    },
})

module.exports = mongoose.model("User" , userSchema)