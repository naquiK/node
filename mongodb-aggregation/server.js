const express = require('express')
require('dotenv').config()
const dbConnection=require('./DB/dbConnection')
const router = require('./routes/route')
const bookRoute=require('./routes/bookRoute')


const app=express()

app.use(express.json())
app.use("/product" , router)
app.use('/books' ,bookRoute)


dbConnection()

const port = process.env.PORT ||3000
app.listen(port ,() => {
    console.log(`you server is running on ${port}`)
})
 