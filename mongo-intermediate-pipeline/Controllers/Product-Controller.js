const { $where } = require('../../upload-file/models/userModel');
const Products = require('../Models/Product');

const getProductAnalysis=async (req,res) =>{
  try {
    const result = await Products.aggregate([
      {
        $match: {
         category: "Electronics",
        }
      },
      {
        $group:{
          _id:null,
          totalRevenue: {
            $sum: "$price"
          },
          averagePrice: {
            $avg: "$price"
          },
          maxPrice: {
            $max: "$price"
          },
          minPrice: {
            $min: "$price"
          },
        }
      },
      {
        $project: {
          _id: 0,
          totalRevenue: 1,
          averagePrice: 1,
          maxPrice: 1,
          minPrice: 1,
          priceRange: {
            $subtract: ["$maxPrice", "$minPrice"]
          }
        }
      }
    ])

    res.status(200).json({
      success: true,
      data: result
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
    
  }
}


const getAllProducts = async (req, res) => {
  try {
    
    const result = await Products.aggregate([
      {
        $match:{
          inStock: true,
          // price:{$gte:100}
        },
      },
        {
          $group: {
            _id: "$category",
            avgPrice:{
              $avg: "$price"
            },
            count:{
              $sum: 1
            }
          }
        }
      
    ])

    res.status(200).json({
      success: true,
      data: result
    });


  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
    
  }
}

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
    insertSampleProducts,
    getAllProducts,
    getProductAnalysis
}