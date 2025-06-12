const express = require('express');
const authMiddleware = require('../Middleware/home-auth-middleware');
const { getAllImages } = require('../controller/cloudinaryController');

const router = express.Router();

router.get('/', authMiddleware ,getAllImages);

module.exports = router;