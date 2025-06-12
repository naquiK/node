require('dotenv').config()
const express =require('express');
const dbConnection = require('./Db/DatabaseConnection');
const router = require('./router/routes');
const homeRouter = require('./router/home-routes');
const adminRouter = require('./router/admin-routes');
const app = express();


dbConnection();

app.use(express.json());
app.use("/api/v2", router); 
app.use("/api/v2/home", homeRouter);
app.use("/api/v2/admin", adminRouter);


const port = process.env.PORT || 5000;
app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
})