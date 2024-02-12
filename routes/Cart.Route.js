const express=require('express')
const route=express.Router()

//Defining of Cart Routes
route.post('/carts/add',Add_To_Cart)
route.delete('/carts/delete',Remove_From_Cart)
route.delete('/carts/clear',Clear_Cart)

module.exports=route