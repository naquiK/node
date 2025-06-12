const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        require:[true , 'Book title is required'],
        trim:true,
        maxLength:[100 , 'book title cannot be more then 100 letters']
    },
    author:{
        type:String,
        require:[true , 'Auther name is required'],
    },
    year:{
        type:Number,
        require: [true , 'Publication year is required'],
        max : [new Date().getFullYear() ,'year cannot be in future']
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports =mongoose.model("Books" , bookSchema)
