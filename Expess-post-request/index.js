const express=require('express')
const app = express()

app.use(express.json())

let books=[
    {
        id:"1",
        title: "Book 1"
    },
    {
        id:"2",
        title: "Book 2"
    },
    {
        id:"3",
        title: "Book 3"
    },
    {
        id:"4",
        title: "Book 4"
    },
]

app.get("/" , (req,res) =>{
    res.status(200).send("<h1> hello! welcome to home route </h1>") 
})

//get all book

app.get('/get-Books', (req,res) => {
    res.status(200).json({
        status:"success",
        data:books
    })
})

//create a single book

app.get("/get-Books/:id" ,(req,res) => {
    const singleBook= books.find(book => book.id===req.params.id)
    singleBook? res.status(200).json({
        status:"success",
        data:singleBook
    }) 
    :res.status(404).json({
        status:"failed",
        message:"book not exist"
    })
})

//create a book

app.post("/add-book" , (req,res) => {
    const newBook ={
        id:books.length + 1,
        title:`books ${books.length + 1}`
    }
    books.push(newBook)

    res.status(201).json({
        status:"success",
        message:"New book created",
        data:newBook
    })
})

//update a book

app.put("/update/:id" , (req, res) => {
    const findCurrent = books.find(book=> book.id===req.params.id)

    findCurrent? findCurrent.title=req.body.title || findCurrent.title 
         :
      res.status(404).json({
        status:"failed",
        message:"Book doesn't exist"
    })
    res.status(200).json({
        status:"success",
        message:"Book update sucessfully"
    })
})


app.delete("/delete-book/:id" , (req,res) => {
    const findCurrent = books.findIndex(book=> book.id===req.params.id)
    findCurrent?
    books.splice(findCurrent,1):
    res.status(404).json({
        status:"failed",
        message:"Book doesn't exist"
    })
    res.status(200).json({
        status:"success",
        message:"Book delete Sucessfully"
    })
})

app.listen(3000)