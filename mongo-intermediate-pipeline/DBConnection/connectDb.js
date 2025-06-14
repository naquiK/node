const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log('Database connected successfully');
        })
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1);
    }
}
 
module.exports = dbConnect;