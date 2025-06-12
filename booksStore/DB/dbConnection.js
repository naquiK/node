const mongoose = require('mongoose')

const dbConnection = async () => { 
try {
    await  mongoose.connect("mongodb://localhost:27017/")
        .then(() => console.log("connected to Database successfully"))
         .catch((err) =>{
            console.error(err)
            console.log("Error occur during connection with db")
    
})
} catch (error) {
    console.log(error)
    console.log("Error occur during connection with db")
    process.exit(1)
}
}

module.exports = dbConnection