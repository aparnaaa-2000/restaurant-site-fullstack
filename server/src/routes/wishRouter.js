const express =require('express')
const wishRouter = express.Router()
const wishdata = require('../models/wishdata')
const fooddata = require('../models/addfooddata')
const objectId= require("mongodb").ObjectId
const addfooddata = require('../models/addfooddata')
const check = require('../middleware/checkauth')
const cartRouter = require('./cartRouter')




wishRouter.post('/',check,async(req,res)=>{
    
    try{
        console.log(req.userData.loginId);
        const olduser =await wishdata.find({loginId:req.userData.loginId})
        console.log("olduser===",olduser);
        if(olduser[0]!=undefined){
            const filter = olduser.filter((filtereddata)=>{
                console.log("filtereddata====",filtereddata.productId);
                return filtereddata.productId == req.body.productId
            })
            console.log("filter====",filter);
            if(filter[0]!=undefined){
                return res.status(400).json({
                    success:false,
                    error:true,
                    message:"product already in wishlist"
                })
            }
            else{
                
        var items={
            productId:req.body.productId,
            loginId:req.userData.loginId,
            status:0,

        }
        console.log("items===>",items);
        var wishitem =await wishdata(items).save()
        console.log("wishitem====>",wishitem);
        if(wishitem){
            return res.status(200).json({
                success:true,
                error:false,
                data:wishitem,
                message:"successfully added to wishlist"
            })
        }

            }
        }
        var items={
            productId:req.body.productId,
            loginId:req.userData.loginId,
            status:0,

        }
        console.log("items===>",items);
        var wishitem =await wishdata(items).save()
        console.log("wishitem====>",wishitem);
        if(wishitem){
            return res.status(200).json({
                success:true,
                error:false,
                data:wishitem,
                message:"successfully added to wishlist"
            })
        }


    }
    catch(error){
        console.log("errrrrrrrr",error);
        return res.status(400).json({
            success:false,
            error:true,
            data:error,
        })
    }
})
    

    
    


wishRouter.get('/viewwish',check,async(req,res)=>{
    const id = req.userData.loginId;
    console.log("loginid===>",id);

    try{
        await wishdata.aggregate(
            [
                
                
                    {
                      '$lookup': {
                        'from': 'addfooddatas', 
                        'localField': 'productId', 
                        'foreignField': '_id', 
                        'as': 'result'
                      }
                    }, {
                      '$lookup': {
                        'from': 'logindatas', 
                        'localField': 'loginId', 
                        'foreignField': '_id', 
                        'as': 'results'
                      }
                    },
                  
              
                {
                    "$unwind":"$result",
                    
                },
                
                {
                    "$unwind":"$results",

                },
                {
                    "$match":{
                        "loginId":objectId(id)
                    }
                },
               
                {
                    "$group":{
                        "_id":"$_id",
                        "loginId":{"$first":"$loginId"},
                        "productId":{"$first":"$productId"},
                        "status":{"$first":"$status"},
                        "username":{"$first":"$results.username"},
                        "fooditem":{"$first":"$result.fooditem"},
                        "category":{"$first":"$result.category"},

                        "price":{"$first":"$result.price"},
                        "image":{"$first":"$result.image"},
                        
                        
                    }
                }

            

        ]).then((wishdetail)=>{
            console.log("wishdetail",wishdetail);
            
                return res.status(200).json({
                    succes:true,
                    error:false,
                    data:wishdetail,
                    message:"successfully added to wishlist"
                })

            

        })



            
        }
    
    catch(error){
        return res.status(400).json({
            succes:false,
            error:true,
            data:error,

        })
    }
   
})

wishRouter.get('/delete/:id',async(req,res)=>{
    try{
        const delet =req.params.id
        console.log(delet);
        await wishdata.findByIdAndDelete({_id:delet}).then((delet)=>{
            if(delet){
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





// wishRouter.post('/viewwish',check,async(req,res)=>{
//     const id = req.userData.loginId
//     try{
//         await wishRouter.aggregate([
//             {
//                 {
//                     '$lookup': {
//                       'from': 'addfooddatas', 
//                       'localField': 'productId', 
//                       'foreignField': '_id', 
//                       'as': 'result'
//                     }
//                   }, {
//                     '$lookup': {
//                       'from': 'logindatas', 
//                       'localField': 'loginId', 
//                       'foreignField': '_id', 
//                       'as': 'result'
//                     }
//                   },
                

//             }
//         ])
//     }
// })
module.exports=wishRouter




