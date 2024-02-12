const User_Model=require('../models/User.Model')
const bcrypt = require('bcrypt')

//Register Controller
const Register_Controller=async(req,res)=>{

    const {username,email,password}=req.body;

    if(!username||!email||!password)
    return res.json({message:"Fill all the required fields"})


    try{
        let user=await User_Model.getUserByEmail(email);

        if(user)
        return res.json({message:"User Already Exists"});

        hashed_password= await bcrypt.hash(password,10)

        const newUser=new User_Model({
            Name:username,
            Email:email,
            Password:hashed_password
        })

        await newUser.save();

    }catch(err)
    {
        res.send({error:err.message})
    }
}

//Login Controller
const Login_Controller=async(req,res)=>{

    const{email,password}=req.body

    if(!email||!password)
    res.send({message:"Fill in all the required fields"})

    try{
        const user=await User_Model.findOne({email:email})
        if(!user)
        return res.send('This user does not exist in the database')

        const isPasswordValid=await bcrypt.compare(password,user.Password)

        if(!isPasswordValid)
        return res.send('Invalid Password')
         
        res.json({
            message:'Logged In',
        })
    }
    catch(err)
    {
        console.log(err)
        res.json({error:err})
    }
}

module.exports={Register_Controller,Login_Controller}