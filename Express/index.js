const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        status:"success",
        message:"server started",
        data:{
            id:1,
            name:"naqui",
            cousre:"btech",
            spect:"Core"
        }
    })
})


const port=3000
app.listen(port , () => {
    console.log(`server is listen on port no ${port}`)
})