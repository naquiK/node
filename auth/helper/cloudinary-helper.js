const cloudinary = require('../config/cloudinary');
const fs = require('fs');

const uploadCloudinary = async (filePath) => {
   try{
       const result=await cloudinary.uploader.upload(filePath);
          return{
              url:result.secure_url,
              publicId:result.public_id
          }
      }catch(err){
         console.log("error while uploading file to cloudinary");
         throw new Error(err.message);
      }
      finally {
        // Clean up the local file after uploading
        fs.unlinkSync(filePath);
    }
  
    }
     


module.exports = {
    uploadCloudinary
}