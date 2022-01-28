const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: { type: String , required: true},
    desc: {type: String, required: true, required: true},
    img: {type:String, required: true },
    categories: {type:Array },
    size: {type:String, required: true },
    color: {type:String, required: true },
    price: {type:Number, required: true },
    // img: {type:String, required: true },

    
   },
{ timestamps: true } 
);

module.exports = mongoose.model("Product",productSchema) 