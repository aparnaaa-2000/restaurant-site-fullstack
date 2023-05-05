const mongoose=require("mongoose")
mongoose.connect('mongodb+srv://aparnarajendran:aparna@cluster0.2jjfvoh.mongodb.net/newproject?retryWrites=true&w=majority')


const Schema = mongoose.Schema


const WishSchema = new Schema({
    loginId:{type:mongoose.Types.ObjectId,ref:"logindata"},
    productId: {type:mongoose.Types.ObjectId,ref:"addfooddata"},
    status:{type:String},
})

var wishdata = mongoose.model('wishdata',WishSchema)
module.exports= wishdata;   