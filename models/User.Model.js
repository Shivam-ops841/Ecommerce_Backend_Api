const mongoose=require('mongoose')

const User_Model=new mongoose.Model({
    Name:{
        type:String,
            required:true,
    },
    Email:{
        type:String,
        required:true,
        unique:true,
    },
    Password:{
        type:String,
        required:true,
        minWidth: 8,
    }
})

module.exports = mongoose.model('User',User_Model)