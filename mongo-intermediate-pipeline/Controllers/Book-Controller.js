const Author = require('../Models/Auther');
const Book = require('../Models/Book');


const createAuthor= async (req, res) => {
  try {
    const { name, bio } = req.body;

    const author = new Author({
      name,
      bio
    });

    await author.save();

    res.status(201).json({
      success: true,
      data: author
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}

const createBook = async (req,res) =>{
    try {
        const book = new Book({
            title: req.body.title,
            year: req.body.year,
        })

        await book.save();
        res.status(201).json({
            success: true,
            data: book
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
        
    }
}

const getBooksByAuthor = async (req, res) => {
  try {
    const authorId = req.params.id;

    const books = await Book.findById(authorId)
    if (!books) {
      return res.status(404).json({
        success: false,
        message: 'No books found for this author'
      });
    }
    res.status(200).json({
      success: true,
      data: books
    });
  }
  catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}


module.exports = {
  createAuthor,
  createBook,
  getBooksByAuthor
};