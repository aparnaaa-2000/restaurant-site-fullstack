const mongoose=require("mongoose")
mongoose.connect('mongodb+srv://aparnarajendran:aparna@cluster0.2jjfvoh.mongodb.net/newproject?retryWrites=true&w=majority')


const Schema = mongoose.Schema

const LoginSchema = new Schema({
    username: {type:String},
    password : {type:String},
})


var logindata = mongoose.model('logindata',LoginSchema)
module.exports= logindata;