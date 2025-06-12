const Products=require('../models/model')


const getProductStats= async(req,res)=>{
  try {
    
    const result=await Products.aggregate([
      {
        $match:{
          inStock : true,
          price:{
            $gte:700
          }
        }
      },
      //group the document 
      {
        $group:{
          _id:"$category",
          avgPrice:{
            $avg:"$price"
          },
          count:{
            $sum:1
          }
        }
      }     
    ])
    res.status(200).json({
      success:true,
      totalData:result.length, 
      data:result
    })

  } catch (error) {
    res.status(500).json({
      success:false,
      message:error.message
    })
  }
}

const getProductAnalysis=async(req,res)=>{
  try {

    const result = await Products.aggregate([
      {
        $match:{
          category:'Electronics'
        },
      },
      {
      $group : {
        _id:null,
        totalRevenue:{
          $sum:"$price"
        },
        avgPrice:{
          $avg:"$price"
        },
        maxProductPrice:{
          $max:"$price"
        },
        minProductPrice:{
          $min:"$price"
        },
      }
    },{
      $project:{ 
        _id:0,
        totalRevenue:1,
        avgPrice:1,
        maxProductPrice:1,
        minProductPrice:1,
        priceRange:{
          $subtract:["$maxProductPrice" , "$minProductPrice"]
        }
      }
    }
    ])

    res.status(200).json({
      success:true,
      message:"Matched",
      data:result
    })

  } catch (error) {
    res.status(500).json({
      success:false,
      message:error.message
    })
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


module.exports ={insertSampleProducts , getProductStats , getProductAnalysis} 