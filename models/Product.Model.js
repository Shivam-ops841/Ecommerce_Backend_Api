const mongoose=require('mongoose')

const Product_Model=new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Price:{
        type:Number,
        required:true,
    },
    Description:{
        type:String,
    },
    Quantity:{
        type:Number,
        default:0
    }
});

module.exports=mongoose.model('Product',Product_Model)