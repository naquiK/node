const express =require('express')
const dbConnection = require('./DB/dbConnection')
const dotenv = require('dotenv')
const router = require('./routers/routes')

dotenv.config()

const app=express()

//middleware
app.use(express.json())
//db connection
dbConnection()

//routers
app.use("/api/v1"  ,router )


//port
const port =process.env.PORT
app.listen(port || 3001 ,() => {
    console.log(`server is running on port no ${port}`)
})