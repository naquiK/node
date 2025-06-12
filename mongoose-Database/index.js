const express=require('express')
const  connection = require('./Db/dbConnection')

const app=express()

app.use(express.json())

connection()

app.get('/',(req,res) => {
    res.send('Hello World')
})  


port=3000
app.listen(port ,() => {
    console.log(`Server is running on port ${port}`)
})