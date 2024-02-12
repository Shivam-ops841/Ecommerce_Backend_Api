const express=require('express')
const route=express.Router();
const {Register_Controller,Login_Controller}=require('../controllers/User.Controller')

route.post('/register',Register_Controller)
route.post('/login',Login_Controller)

module.exports=route