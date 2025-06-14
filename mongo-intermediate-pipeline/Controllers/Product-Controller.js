const Products = require('../Models/Product');

const insertSampleProducts=async(req,res)=>{
    try {
        const sampleProducts = [
            {
              name: "Laptop",
              category: "Electronics",
              price: 999,
              inStock: true,
              tags: ["computer", "tech"],
            },
            {
              name: "Smartphone",
              category: "Electronics",
              price: 699,
              inStock: true,
              tags: ["mobile", "tech"],
            },
            {
              name: "Headphones",
              category: "Electronics",
              price: 199,
              inStock: false,
              tags: ["audio", "tech"],
            },
            {
              name: "Running Shoes",
              category: "Sports",
              price: 89,
              inStock: true,
              tags: ["footwear", "running"],
            },
            {
              name: "Novel",
              category: "Books",
              price: 15,
              inStock: true,
              tags: ["fiction", "bestseller"],
            },
          ];

          const result= await Products.insertMany(sampleProducts)
          res.status(200).json({
            success:true,
            data:result.length 
          })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}


module.exports = {
    insertSampleProducts
}