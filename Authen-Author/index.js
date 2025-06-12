require('dotenv').config()
const express= require('express')
const dbConnection = require('./Db/dbConnection')
const router = require('./routers/router')
const HomeRouter = require('./routers/home-routes')
const adminRouter = require('./routers/admin-routes')

const app = express()

//middleware
app.use(express.json())
app.use("/api/v1" ,router)
app.use("/api/home" ,HomeRouter)
app.use("/admin/v1" ,adminRouter)

//Database Connection
dbConnection()

// server listen   
const port = process.env.PORT
app.listen(port , ()=>{
    console.log(`app listen on port no ${port}`) 
})