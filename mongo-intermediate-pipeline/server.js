const express = require('express')
require('dotenv').config()

const dbConnect = require('./DBConnection/connectDb')
const router = require('./router/routes')
const bookRoutes=require('./router/book-Routes')

const app = express()


app.use(express.json())
app.use("/api/v1",router)
app.use("/api/v1/books",bookRoutes)

dbConnect()
const PORT = process.env.PORT || 3000

 
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to the MongoDB Intermediate Pipeline"
    })
})

app.listen(PORT , ()=>{ 
    console.log(`Server is running on port ${PORT}`)
}) 


 