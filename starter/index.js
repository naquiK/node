const express=require('express')
const app = express()
const fs = require('fs')
const { json } = require('stream/consumers')

app.use(express.json());

app.use((req,res,next)=> {
    req.requestTime = new Date().toISOString()
    next()
})
const tours =JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))

app.get('/api/v1/tours/:id?' , (req , res) =>{

    console.log(req.params)

    const id = req.params.id * 1
    console.log(id)
    const tour = tours.find(el=> el.id===id)

    !id?
    res.status(200).json({

        status:"success",
        Date:req.requestTime,
        data:{
            tours
        }
    })
    :
    ((!tour)? 
    res.status(404).json({ 
        status:"Fail",
        message: "tours not found"
    })
    :
    res.status(200).json({

        status:"success",
        data:{
            tour
        }
    })
)
})

app.post('/api/v1/tours' , (req,res) => {

    const newId =tours[tours.length-1].id +1
    const newTour=Object.assign({id:newId} , req.body)
    
    tours.push(newTour)
    
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json` , JSON.stringify(tours) , err=>{
        res.status(201).json({
            staus:"created",
            data: {
                tour:newTour
            }
        })
    })
   
})

app.patch('/api/v1/tours/:id?' , (req,res) => {
    req.params.id*1> tours.length? 
    res.status(404).json({ 
        status:"Fail",
        message: "tours not found"
    })
    :
    res.status(200).json({

        status:"success",
        data:{
            tour :"<Updated Tours>"
        }
    })
})


app.delete('/api/v1/tours/:id?' , (req,res) => {
    req.params.id*1> tours.length? 
    res.status(404).json({ 
        status:"Fail",
        message: "tours not found"
    })
    :
    res.status(204).json({

        status:"success",
        data:null
    })
})


const port =3000
app.listen(port , () => {
    console.log(`app listen on port no ${port}`)
})