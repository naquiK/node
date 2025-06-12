const express=require('express')

const app = express()

const middleware = (req,res,next)=>{
    const timeStamp= new Date().toISOString()
    console.log(`${timeStamp} from ${req.method} to ${req.url}`)
    next()
}

app.use(middleware)

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

