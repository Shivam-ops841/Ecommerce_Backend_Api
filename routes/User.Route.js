const express=require('express')
const route=express.Router();

route.post('/register',Register_Controller)
route.post('/login',Login_Controller)

module.exports=route