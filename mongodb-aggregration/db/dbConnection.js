const mongoose = require('mongoose')

const connection = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Database connected successfully')
    })
    .catch((err) => {
        console.error('Error connecting to the database:', err)
        console.log("An error occurred while connecting to the database")
        process.exit(1) // Exit the process with failure
    })
    
}

module.exports = connection;