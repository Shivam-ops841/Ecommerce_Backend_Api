const express=require('express');
const route=express.Router()

//Importing of Routes

const User_Route=require('./User.Route')
const Product_Route=require('./Product.Route')
const Order_Route=require('./Order.Route')
const Cart_Route=require('./Cart.Route')

//Defining Of Routes

route.use('/user',User_Route)
route.use('/product',Product_Route)
route.use('/order',Order_Route)
route.use('/cart',Cart_Route)

module.exports=route