const express=require('express')

const app=express()

//middleware 

const myFirstMiddleware = (req,res,next)=> {
    console.log("this will run on every request")

    next()
}

app.use(myFirstMiddleware)

app.get("/" ,(req,res) => {
    res.status(200).json({
        status:"success",
        message:"this is homepage baby"
    })
})
app.get("/about" ,(req,res) => {
    res.status(200).json({
        status:"success",
        message:"this is about page baby"
    })
})
app.get("*" ,(req,res) => {
    res.status(404).send(`<h1><center>page not found</center></h1>`)
})


const port =3000
app.listen(port , () => {
    console.log(`server is running on port no ${port} baby`)
})