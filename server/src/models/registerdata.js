const mongoose=require("mongoose")
mongoose.connect('mongodb+srv://aparnarajendran:aparna@cluster0.2jjfvoh.mongodb.net/newproject?retryWrites=true&w=majority')


const Schema = mongoose.Schema

const RegisterSchema = new Schema({
    loginId:{type:mongoose.Types.ObjectId,ref:"logindata"},
    name: {type:String},
    email:{type:String}
   
})


var registerdata = mongoose.model('registerdata',RegisterSchema)
module.exports= registerdata;       