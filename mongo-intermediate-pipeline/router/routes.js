const express = require('express')
const { insertSampleProducts, getAllProducts, getProductAnalysis } = require('../Controllers/Product-Controller')

const router = express.Router()

router.post('/add' , insertSampleProducts)
router.post('/getfilter' , getAllProducts)
router.post('/getAnalysis' , getProductAnalysis)

module.exports= router