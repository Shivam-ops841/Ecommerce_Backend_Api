const Product_Model=require('../models/Product.Model')


const Product_Controller=async(req,res) => {

    try{
        const products=await Product_Model.find()
        res.send({success:true,products})
    }
    catch(err)
    {
        res.send(err)
    }

}

const Product_By_Id_Controller=async(req,res) => {

    try{
        const {id}=req.params.id;
        const product=await Product_Model.find(id)

        if(!product)
        return res.status(404).send("This product is not available")
        
       return res.send({success:true,data:product})
    }
    catch(err)
    {
        return res.send({success:false,data:err})
    }

}


const Product_Create_Controller=async(req,res)=>{

    try{
        const {name,price,description,quantity}=req.body

        const new_product = await Product_Model.create({
            Name:name,
            Price:price ,
            Description:description ,
            Quantity:quantity
        })

        await new_product.save()

        res.send('Product created successfully')
    }
    catch(err) {
        res.send(err.message)
    }

}


const Update_Product_Controller=async(req,res)=>{

    try{
        const id=req.params.id
        const {name,price,description,quantity}=req.body

        const update_product=await Product_Model.findByIdAndUpdate(id,name,price,description,quantity)

        if(!update_product)
        return res.send('Product not found to update')

        return res.send('Product Updated Successfully ')
    }
    catch(err){
        return res.send(err)
    }

}


const Delete_Product_Controller=async(req, res)=>{
    try{
        const id=req.params.id
        const deleteProduct=await Product_Model.findByIdAndDelete(id)

        if(!deleteProduct)
        return res.send('Product could not be deleted')

        return res.send("Product has been deleted")
    }
    catch(err){
        return res.send(err)
    }

}


module.exports={Product_Controller,Product_By_Id_Controller,Product_Create_Controller,Update_Product_Controller,Delete_Product_Controller}