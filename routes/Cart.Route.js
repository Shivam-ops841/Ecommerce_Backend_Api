const express=require('express')
const route=express.Router()
const {Add_To_Cart,
    Remove_From_Cart,
    Clear_Cart}=require('../controllers/Cart.Controller')

//Defining of Cart Routes
route.post('/carts/add',Add_To_Cart)
route.delete('/carts/delete',Remove_From_Cart)
route.delete('/carts/clear',Clear_Cart)

module.exports=route