const express = require('express')
const { insertSampleProducts } = require('../Controllers/Product-Controller')

const router = express.Router()

router.post('/add' , insertSampleProducts)

module.exports= router