const express=require('express')
const { getAllBook, addNewBook, getSingleBook, updateBook, deleteBook } = require('../controllers/book-Controllers')
const router =express.Router()


    router.get("/get-books" , getAllBook)
    router.get("/get-books/:id" ,getSingleBook )
    router.post("/add-book" , addNewBook)
    router.put("/update-book/:id",updateBook)
    router.delete("/delete-book/:id",deleteBook)


module.exports=router