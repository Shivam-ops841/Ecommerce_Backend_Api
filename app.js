const express=require('express')
require('dotenv').config();
const connect=require('./db/connect.js');
const app=express()
const main_route=require('./routes/Main.Route')

connect(app)

//Route Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Defining Routes
app.use('/api/v1',main_route)
app.listen(3000,()=>{
    console.log('listening on port 3000');
})