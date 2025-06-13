const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:String,
    category:String,
    price:Number,
    stock:Boolean,
    tag:String,
})

module.exports = mongoose.model('Product', productSchema);