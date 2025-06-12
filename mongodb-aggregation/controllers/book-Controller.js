const Book = require('../models/Book')
const  Author = require('../models/Author')

const createAuthor= async (req,res) =>{
    try {
        const {name , bio} = req.body
        const newAuthor =await new Author({
            name,
            bio
        })
        await newAuthor.save()

        res.status(200).json({
            status:"success",
            data:newAuthor
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
const createBook= async (req,res) =>{
    try {
        const{title , author} =req.body
        const newBook= await new Book({
            title,
            author
        })

        await newBook.save()

        res.status(200).json({
            success:true,
            data:newBook
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

const getBook= async(req,res)=>{
    try {
        const book = await Book.findById(req.params.id).populate('author')
        res.status(200).json({
            success:true,
            data:book
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
            })
    
}
}

module.exports= {createAuthor,createBook ,getBook}