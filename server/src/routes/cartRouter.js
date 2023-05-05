const express =require('express')
const cartRouter = express.Router()
const cart= require('../models/cartdata')
const multer= require('multer')
const { param } = require('./loginRouter')
const addfooddata = require('../models/addfooddata')
// const cartdata = require('../models/cartdata')
const objectId= require("mongodb").ObjectId
// const check=require('../middleware/checkauth')


cartRouter.post('/',async(req,res)=>{
    // const id = req.body.id
    // console.log("loginId",id)
    try{

        const olduser = await cart.find({ loginId:req.body.loginId})
        console.log("olduser====",olduser);
        if(olduser[0]!=undefined){
            const filter = olduser.filter((filtereddata)=>{
                console.log("filtereddata===",filtereddata.productId);
                return filtereddata.productId == req.body.productId
            })
            console.log("filter",filter);
            if(filter[0]!=undefined){
                return res.status(400).json({
                    success:false,
                    error:true,
                    message:"product already in cart"
                })
            }
            else{
                
        var items={
            productId:req.body.productId,
            loginId:req.body.loginId,
            quantity:1,   
            status:0,
        }
        console.log("items",items); 
           
        var cartitem= await cart(items).save()
        console.log("cartitem====",cartitem);
        if(cartitem){
            return res.status(200).json({
                succes:true,
                error:false,
                data:cartitem,
                data:cartitem,
                message:"successfully added to cart"
            })
        }
 

            }
        }

        var items={
            productId:req.body.productId,
            loginId:req.body.loginId,
            quantity:1,   
            status:0,
        }
        console.log("items",items); 
           
        var cartitem= await cart(items).save()
        console.log("cartitem====",cartitem);
        if(cartitem){
            return res.status(200).json({
                succes:true,
                error:false,
                data:cartitem,
                data:cartitem,
                message:"successfully added to cart"
            })
        }

    }
    catch(error){
        return res.status(400).json({
            success:false,
            error:true,
            data:error,
        })
    }
})




        

    
    



cartRouter.get('/viewcart/:id', async(req,res)=>{
    const id = req.params.id
    console.log("id===",id);
    try{
        await cart.aggregate([
            {
              '$lookup': {
                'from': 'addfooddatas', 
                'localField': 'productId', 
                'foreignField': '_id', 
                'as': 'result'
              }
            },
            {
                "$unwind":"$result",
            },
            {
                "$match":{
                    "loginId":objectId(id)
                }
            },
            {
                "$group":{
                    "_id":"$_id",
                    "loginid":{"$first":"$loginId"},
                    "productId":{"$first":"$result._id"},
                    "quantity":{"$first":"$quantity"},
                    "status":{"$first":"$status"},
                    "fooditem":{"$first":"$result.fooditem"},
                    "price":{"$first":"$result.price"},
                    "image":{"$first":"$result.image"},


                    
                    
                }
            }
            
          ]).then((cartdetail)=>{
            console.log("cartt===>",cartdetail)
            if(cartdetail){
                return res.status(200).json({
                    success:true,
                    error:false,
                    data:cartdetail,
                    message:"successfully added to cart"
                })
            }
        })
    }
    catch(error){
        return res.status(400).json({
            success:false,
            error:true,
            data:error,
        })
    }

})


cartRouter.get('/delete/:id',async(req,res)=>{
    try{
        const dele = req.params.id
        await cart.deleteOne({_id:dele}).then((dele)=>{
            if(dele){
                return res.status(400).json({
                    succes:true,
                    error:false,
                    message:"successfully deleted",
                })
            }

        })
        
        }
        catch(error){
            return res.status(200).json({
                succes:false,
                error:true,
                data:error,

            })          
            
        }
})

cartRouter.post('/increment/:id',async(req,res)=>{
    try{
        const id = req.params.id
        console.log("id============>",id);
        await cart.findOne({_id:id}).then((increment)=>{
            if(increment){
                console.log("increment====",increment)
                const newitem =increment.quantity + 1
                console.log("newitem",newitem);
                cart.findByIdAndUpdate({_id:objectId(id)},{$set:{quantity:newitem}}).then((details)=>{
                    
                    return res.status(200).json({
                        succes:true,
                        error:false,
                        message:"updated"
                    })
                
                })
            }
        })
    }
    catch(error){
        return res.status(400).json({
            success:false,
            error:true,
            data:error,
        })
    }
})






cartRouter.post('/decrement/:_id',async(req,res)=>{
    try{
        const idd= req.params._id
        console.log("id=====",idd);
        await cart.findOne({_id:idd}).then((decrement)=>{
            if(decrement){
                console.log("decrement===",decrement);
                const newqnty= decrement.quantity - 1;
                console.log("newqnty====",newqnty);
                cart.findByIdAndUpdate({_id:objectId(idd)},{$set:{quantity:newqnty}}).then((decdata)=>{
                    if(decdata){
                        
                    return res.status(200).json({
                        succes:true,
                        error:false,
                        message:"updated"
                    })

                    }
                })
            }
        })

    }
    catch(error){
        return res.status(400).json({
            success:false,
            error:true,
            data:error,
            
        })
    }
})


module.exports=cartRouter








