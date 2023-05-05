const express =require('express')
const registerRouter = express.Router()
var data = require('../models/logindata')
var regdata = require('../models/registerdata')
const bcrypt=require('bcrypt')






registerRouter.post('/',async(req,res)=>{
    console.log(req.body);
    try{
        const olduser = await data.findOne({username:req.body.username})
        console.log("olduser===",olduser);
        if(olduser){
            return res.status(400).json({
                success:false,
                error:true,
                message:"user exist"
            })
        }
        const hashedpassword = await bcrypt.hash(req.body.password,10)
        console.log("hashedpass===",hashedpassword);
        const datas ={
            username :req.body.username,
            password:hashedpassword,
        }
        console.log("datas=======>",datas);
        const result = await data(datas).save()
        if (result){
            var datasReg ={
                name :req.body.name,
                email:req.body.email,
                loginId:result._id
            }
            console.log(datasReg);
            const detail=regdata(datasReg).save()
            if(detail){
            return res.status(200).json({
                success:true,
                error: false,
                message:"registration completed",
                data:detail
            
            })
        }
        }
    }
    catch (error){
        return res.status(400).json({
            success:false,
            error:true,
            data:error,
        })
        
    }

})
module.exports=registerRouter
