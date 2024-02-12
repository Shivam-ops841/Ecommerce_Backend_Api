const express=require('express')
const route=express.Router();
const {Order_Controller,
    Order_Id_Controller,
    Order_Add_Controller,
    Order_Update_Controller,
    Order_Delete_Controller}=require('../controllers/Order.Controller')

route.get('/orders',Order_Controller)
route.get('/orders/:id',Order_Id_Controller)
route.post('/orders',Order_Add_Controller)
route.put('/orders/:id',Order_Update_Controller)
route.delete('/orders/:id',Order_Delete_Controller)

module.exports=route