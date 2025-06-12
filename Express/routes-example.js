const express = require("express")
const app=express()

app.get("/", (req,res) => {
    res.status(200).send("this is homepage baby")
})

app.get("/products" ,(req,res) => {

    const products=[
        {
            id:1,
            product_name:"product 1",
            about:{
                name:"product",
                quantity:12,
                price:"$10"
            }
        },
        {
            id:2,
            product_name:"product 2"
        },
        {
            id:3,
            product_name:"product 3"
        },
        {
            id:4,
            product_name:"product 4"
        },
        {
            id:5,
            product_name:"product 5"
        },
        {
            id:6,
            product_name:"product 6"
        },
        {
            id:7,
            product_name:"product 7"
        },
        {
            id:8,
            product_name:"product 8"
        },
        {
            id:9,
            product_name:"product 9"
        },
        {
            id:10,
            product_name:"product 10"
        },
        {
            id:11,
            product_name:"product 11"
        },
        {
            id:12,
            product_name:"product 12"
        },
        {
            id:13,
            product_name:"product 13"
        },
        {
            id:14,
            product_name:"product 14"
        },
        {
            id:15,
            product_name:"product 15"
        },
        {
            id:16,
            product_name:"product 16"
        },
    ]
    res.json({
        status:"success",
        data:products
    })
})

app.get("/products/:Id" , (req,res) => {
    const productId=parseInt(req.params.Id)
    const products=[
        {
            id:1,
            product_name:"product 1"
        },
        {
            id:2,
            product_name:"product 2"
        },
        {
            id:3,
            product_name:"product 3"
        },
        {
            id:4,
            product_name:"product 4"
        },
        {
            id:5,
            product_name:"product 5"
        },
        {
            id:6,
            product_name:"product 6"
        },
        {
            id:7,
            product_name:"product 7"
        },
        {
            id:8,
            product_name:"product 8"
        },
        {
            id:9,
            product_name:"product 9"
        },
        {
            id:10,
            product_name:"product 10"
        },
        {
            id:11,
            product_name:"product 11"
        },
        {
            id:12,
            product_name:"product 12"
        },
        {
            id:13,
            product_name:"product 13"
        },
        {
            id:14,
            product_name:"product 14"
        },
        {
            id:15,
            product_name:"product 15"
        },
        {
            id:16,
            product_name:"product 16"
        },
    ]

    const singleProduct = products.find(product=>  product.id===productId)

    if(singleProduct){
        res.status(200).json({
            status:"success",
            data:singleProduct,
            
        })
    }
    else{
    res.status(404).json({
        status:"Not Found",
        message:"Product not found",
    
    })}
    
})

app.listen(4000)