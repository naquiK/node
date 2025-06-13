const express = require('express')
const app = express()
require('dotenv').config();
const dbConnection = require('./db/dbconnection');

app.use(express.json());

const PORT = process.env.PORT || 4000;

dbConnection() 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 

 