const mongoose=require('mongoose')
const connection = () => {

    mongoose.connect("mongodb://localhost:27017/").then(() => {
        console.log('Database connected')
    }).catch((err) => {
        console.log(err)
        console.log("some connection occur during connecting Database")
    } )
}


module.exports=connection