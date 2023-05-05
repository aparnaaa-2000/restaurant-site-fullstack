const express =require('express')
const profileRouter = express.Router()
var login =require('../models/logindata')
var reg = require('../models/registerdata')
var ObjectId = require("mongodb").ObjectId
const check=require('../middleware/checkauth')


profileRouter.get('/',check, async(req,res)=>{
    try{
        const id =req.userData.loginId
        console.log("id",id);
        reg.aggregate([
            {
              '$lookup': {
                'from': 'logindatas', 
                'localField': 'loginId', 
                'foreignField': '_id', 
                'as': 'result'
              }
            },
        {
                "$unwind":"$result"
            },
            {
                "$match":{
                    "loginId":ObjectId(id)
                }
            },
            {
                "$group":{
                    "_id":"$_id",
                    "loginid":{"$first":"$loginId"},
                    "name":{"$first":"$name"},
                    "email":{"$first":"$email"},
                    "username":{"$first":"$result.username"},
                    // "password":{"$first":"$result.password"},

                }
            }
          ]).then((details)=>{
            console.log(details);
            return res.status(200).json({
                success:true,
                error:false,
                data:details
            })
        })
    }
    catch (error){
        return res.status(400).json({
            success:false,
            error:true,
            datas:error,
        })
        
    }
})
module.exports=profileRouter



