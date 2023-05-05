const mongoose=require("mongoose")
mongoose.connect('mongodb+srv://aparnarajendran:aparna@cluster0.2jjfvoh.mongodb.net/newproject?retryWrites=true&w=majority')


const Schema = mongoose.Schema

const AddfoodSchema = new Schema({
    loginId:{type:mongoose.Types.ObjectId,ref:"logindata"},
    category:{type:String},
    fooditem:{type:String},
    about:{type:String},
    price:{type:String},
    image:{type:String},


})
var addfooddata = mongoose.model('addfooddata',AddfoodSchema)
module.exports=addfooddata;