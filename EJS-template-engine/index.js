const express=require('express')
const path=require('path')
const { title } = require('process')
const app=express()
const ejs=require('ejs')


//set view engine as ejs

app.set('view engine' , 'ejs')

app.set('views',path.join(__dirname,"view"))

const products=[
    {
        id:1,
        productName:"maggi"
    },
    {
        id:2,
        productName:'pizza'
    },
    {
        id:3,
        productName:'burgur'
    },
    {
        id:4,
        productName:'pasta'
    },
]

app.get('/' , (req,res)=> {
    res.render('home', {title:'Home' , products:products})
})

app.get('/about' ,(req,res) =>{
    render('about' ,{title: 'About page'})
})

app.listen(3000)