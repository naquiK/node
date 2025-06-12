const express=require('express')
const { createAuthor, createBook, getBook } = require('../controllers/book-Controller')
const router=express.Router()

router.post("/author" , createAuthor)
router.post("/add-book" , createBook)
router.get('/get/:id' , getBook)
module.exports=router