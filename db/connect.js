const mongoose= require('mongoose');

const connect=async()=>{
    try{
        await mongoose.connect(process.env.DB_URI)
        console.log('COnnected');
    }
    catch(err)
    {
        console.log(err)
    }
}

module.exports = connect