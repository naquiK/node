const Product=require('../models/Product');

const insertSampleProducts = async (req, res) => {
    try{
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

          const result = await Product.insertMany(sampleProducts);
          res.status(201).json({ 
            success: true,
            message: 'Sample products inserted successfully',
            data: result 
          });

    }catch(err){
        console.error('Error inserting sample products:', err);
        res.status(500).json({ 
            success: false,
            message: 'Error inserting sample products' });
    }
}

module.exports = {insertSampleProducts}