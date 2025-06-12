const express = require('express');
const authMiddleware = require('../Middleware/home-auth-middleware');
const authAdminMiddleware = require('../Middleware/admin-auth-middleware');
const { uploadImage, deleteImage } = require('../controller/cloudinaryController');
const upload = require('../Middleware/multer-middleware');

const router = express.Router();

router.post('/upload', authMiddleware, authAdminMiddleware , upload.single('image'),uploadImage )
router.delete('/delete/:publicId', authMiddleware, authAdminMiddleware , deleteImage)

module.exports = router;