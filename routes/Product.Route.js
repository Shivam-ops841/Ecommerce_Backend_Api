const express=require('express')

const route=express.Router();

const {Product_Controller,Product_By_Id_Controller,Product_Create_Controller,Update_Product_Controller,Delete_Product_Controller}=require('../controllers/Product.Controller')

//Defining Endpoints of Product
route.get('/products',Product_Controller)
route.get('/products/:id',Product_By_Id_Controller)
route.post('/products/:id',Product_Create_Controller)
route.put('/products/:id',Update_Product_Controller)
route.delete('/products/:id',Delete_Product_Controller)


module.exports=route;