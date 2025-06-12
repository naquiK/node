const express=require('express')
const router=express.Router()
const {insertSampleProducts, getProductStats, getProductAnalysis} = require('../controllers/products-Controllers')

router.post('/add' , insertSampleProducts)
router.get('/filter' , getProductStats)
router.get('/analysis' , getProductAnalysis)


module.exports=router