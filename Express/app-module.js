const express = require('express')
const app = express()

app.set('view engine' , "ejs")

app.get("/" , (req , res) => {
    res.status(200).json({
        status:"success",
        data:{
            name:"naqui",
            age:22,
        }
    })
})

app.post("/" , (req,res) =>{
    res.json({
        status:"200",
        data:{
           content: req.body
        }
    })
})

app.listen(4000)