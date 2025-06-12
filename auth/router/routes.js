const express = require('express');
const { registration, login, logout, edit, resetPassword } = require('../controller/userController');
const router = express.Router();

router.post('/registration' , registration )
router.post('/login' , login )
router.get('/logout' , logout)
router.post('/edit' , edit)
router.post('/reset-password' , resetPassword)

module.exports = router;