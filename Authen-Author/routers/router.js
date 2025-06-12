const express=require('express')
const {registration , login} = require('../controller/usercontroller')
const router=express.Router()

router.post("/registration",registration)
router.post("/log-in" ,login)

module.exports = router