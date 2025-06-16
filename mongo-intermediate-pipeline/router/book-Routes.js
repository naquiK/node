const express = require('express')
const router = express.Router();


const { createAuthor, createBook, getBooksByAuthor } = require('../Controllers/Book-Controller');

router.post('/authors', createAuthor);
router.post('/add-book', createBook);
router.get('/get/:id', getBooksByAuthor)


module.exports = router;