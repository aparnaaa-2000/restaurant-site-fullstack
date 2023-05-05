const express =require('express')
const addfoodRouter = express.Router()
var add= require('../models/addfooddata')
const multer= require('multer')
var data = require('../models/logindata')

const addfooddata = require('../models/addfooddata')

 const storage= multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,'../client/public/images')
    },
    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
 })
 const upload = multer({
    storage:storage,
    limits:{
      fieldsize:1024*1024*5
    }
  })

  addfoodRouter.post('/upload',upload.single('file'),async(req,res)=>{
    return res.json("file uploaded successfully")
  })

  addfoodRouter.get('/category/:category',(req,res)=>{
 const cat = req.params.category;
 console.log(cat);
 addfooddata.find({category:cat}).then((addfooddata)=>{
    console.log(addfooddata);
    return res.status(200).json({
        success:true,
        error:false,
        details:addfooddata,
    })
 })   
  })
  addfoodRouter.get('/categories',(req,res)=>{
    const all = req.params.category;
    console.log("value",all);
    addfooddata.find().then((addfooddata)=>{
        console.log(addfooddata);
        return res.status(200).json({
            success:true,
            error:false,
            details:addfooddata,
        })
    })
  })

  addfoodRouter.get('/singleview/:id',async(req,res)=>{
    const id= req.params.id;
    console.log("id",id);

    try{
        await addfooddata.findById({_id:id}).then((details)=>{
            console.log("addfooddata",details);
            if(details){
                return res.status(200).json({
                    success:true,
                    error:false,
                    data:details,
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

 addfoodRouter.post('/',async(req,res)=>{
    const values= req.body
    console.log("values",values);
    
    try{
        var items={
            category:req.body.category,
            fooditem:req.body.fooditem,
            about:req.body.about,
            price:req.body.price,
            image:req.body.image,
            
            
        }
        console.log(items);
        var food = await add(items).save()



        if(food){
            return res.status(200).json({
                success:true,
                error:false,
                data:food,

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




   

 module.exports=addfoodRouter  