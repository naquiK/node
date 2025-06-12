const mongoose = require('mongoose')

const dbConnection=async()=>{
    await  mongoose.connect(process.env.DB_URL)
    .then(() => console.log('Data base connected'))
    .catch((err) =>{
        console.log(err.message)
        process.exit(1)
    }) 
}
module.exports=dbConnection