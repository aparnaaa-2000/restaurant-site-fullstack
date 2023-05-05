const mongoose=require("mongoose")
mongoose.connect('mongodb+srv://aparnarajendran:aparna@cluster0.2jjfvoh.mongodb.net/newproject?retryWrites=true&w=majority')


const Schema = mongoose.Schema


const CartSchema = new Schema({

    loginId:{type:mongoose.Types.ObjectId,ref:"logindata"},
    productId: {type:mongoose.Types.ObjectId,ref:"addfooddata"},
    quantity:Number,
    status:Number,
    price:Number,
})
var cartdata = mongoose.model('cartdata',CartSchema)
module.exports= cartdata;   