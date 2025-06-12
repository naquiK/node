const mongoose=require("mongoose")

const dbConnection=()=>{
   try {
    mongoose.connect(process.env.DB_URL).then(()=>{
        console.log("Database connected")
    }).catch((err)=> console.log(err))
   } catch (error) {
    console.log('some error occur during connecting Database')
    process.exit(1)
   }
}

module.exports=dbConnection