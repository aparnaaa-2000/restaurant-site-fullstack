const express =require('express')
const loginRouter = express.Router()
var data = require('../models/logindata')
var regdata = require('../models/registerdata')
const bcrypt=require('bcrypt')
var jwt = require('jsonwebtoken')
// const checkauth = require('../middleware/checkauth')



loginRouter.post('/', async(req,res)=>{
    console.log("name===>",req.body.username);
    try{
        const olduser =await data.findOne({username:req.body.username})
        console.log("olduser",olduser);
        if(!olduser){
            return res.status(400).json({
                success:false,  
                error:true,
                message:"user not found"
            })
        }
        const check = await bcrypt.compare(req.body.password,olduser.password)
        console.log("check",check);
      
        if (check){   
            var token = jwt.sign({loginId:olduser._id,username:olduser.username},"sercret_key",{expiresIn:'3h'})  

            return res.status(200).json({
                success:true,
                error: false,
                message:"login success",
                datas:olduser,
                token:token
            })
        }
        console.log("token==",token);
        return res.status(400).json({
            success:false,
            error:true,
            message:"incorrect password",
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
module.exports=loginRouter