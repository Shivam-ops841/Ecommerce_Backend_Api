const Order_Model=require('../models/Order.Model')



const Order_Controller=async(req,res)=>{

    try{
        const orders=await Order_Model.find()

        res.send(orders)
    }
    catch(err){
        res.send(err)
        console.log(err)
    }

}


const Order_Id_Controller=async(req,res)=>{

    try{
        const id=req.params.id;

        const order=await Order.find(id);
        
        if(!order)
        res.send('Order Sent Successfully!!')

        res.send('Order Sent Successfully')
    }
    catch(err)
    {
        res.send(err)
    }
}


const Order_Add_Controller=async(req,res)=>{

    try{
        const {user,items,totalprice,status}=req.body

        const newOrder=await Order_Model({
            user:user,
            items:items,
            totalprice:totalprice,
            status:status
        })

        await newOrder.save()

        res.send('Order created successfully')
    }
    catch(err)
    {
        res.send(err);
    }
}

const Order_Update_Controller=async(req,res)=>{
    try{
    const id = req.params.id;
    const {user,items,totalprice,status}=req.body

    const updateOrder=await Order_Model.findByIdAndUpdate(id,{user,items,totalprice,status})

    if(!updateOrder)
    res.send('Order not Updated Successfully!!!!!!!!')

    res.send('Order updated successfully!!!!!!!!')
    }
    catch(err)
    {
        res.send(err);
    }

}

const Order_Delete_Controller=async(req,res)=>{
    try{
        const id=req.params.id;
        const deleteOrder=await Order_Model.findByIdAndRemove(id)
        if(!deleteOrder)
          return  res.send("No Record Found")

          res.send('Order deleted successfully')
    }
    catch(err){
        res.send(err);
    }
}

module.exports={Order_Controller,Order_Id_Controller,Order_Add_Controller,Order_Update_Controller,Order_Delete_Controller}