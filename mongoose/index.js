const express = require('express')
const mongoose =require("mongoose")
const app = express()

app.use(express.json())

mongoose.connect("mongodb://localhost:27017/").then(() => {
    console.log('Database connected')
}).catch((err) => {
    console.log(err)
    console.log("some error occur during connecting Database")
})

const userSchema=new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }, 
    isActive:{
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const User=mongoose.model('User',userSchema)

async function runQueryExample() {
    try {
        //creating a document

        // const newuser=await User.create({
        //     name: "John Doe",
        //     email: "John123@gmail.com",
        //     age: 25,
        //     isActive: true
        // })


        // console.log(newuser)
        

        //another way of creating a document

        // const newUser = await User({
        //     name: "John Doe 3",
        //     email: "John@gmail.com",
        //     age: 25,
        //     isActive: true
        // })

        // await newUser.save()

        

        const allUser = await User.find({ })
        console.log(allUser)


    } catch (error) {
        console.log(error)
        
    } finally{
        await mongoose.connection.close()
    }
}

runQueryExample()

 app.listen(3000, () => {  
    console.log('Server is running on port 3000')
 })