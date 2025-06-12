
const Book=require("../model/book-Model")

const addNewBook = async(req,res) =>{
    try {
        const {title,author,year} = req.body
        const newBook =  await Book({
            title,
            author,
            year
        })
        console.log(newBook)
        newBook?await newBook.save()
        :res.status(500).json({
            status:false,
            message:"Some error occur during creating book"
        })

        res.status(200).json({
            status:true,
            message:"Book created",
            data:newBook
        })
    } catch (error) {
        res.status(500).json({
            status:false,
            message:error
        })
        console.log(error)
        console.log("error during creating book")
    }
}
const getAllBook = async(req,res)=>{
    
    try {
        const allBooks = await Book.find({})
          allBooks.length>0? res.status(201).json({
           status:true,
           message:"all the book",
           data:allBooks
             })
              : res.status(404).json({
                    success:false,
                    message:"Book not found"
    })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"somethink went wrong"
        })
    }
}
const getSingleBook=async(req,res)=>{
    try {
        const bookId=req.params.id
        const currentBook= await Book.findById(bookId)
        currentBook? res.status(201).json({
            success:true,
            data:currentBook
        })
        :res.status(404).json({
            success:false,
            message:"Book not found"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"somethink went wrong"
        })
    }
}

const updateBook=async(req,res)=>{
    try {
        const bookId=req.params.id
        const currentBook= await Book.findByIdAndUpdate(bookId ,req.body ,{ new:true })
        currentBook? res.status(201).json({
            success:true,
            data:currentBook
        })
        :res.status(404).json({
            success:false,
            message:"Book not found"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"somethink went wrong"
        })
    }
}

const deleteBook=async(req,res)=>{
    try {
        const bookId=req.params.id
        const currentBook= await Book.findByIdAndDelete(bookId)
        currentBook? res.status(201).json({
            success:true,
            message:"book deleted"
        })
        :res.status(404).json({
            success:false,
            message:"Book not found"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:"somethink went wrong"
        })
    }
}


module.exports ={getAllBook ,addNewBook , getSingleBook ,updateBook,deleteBook}