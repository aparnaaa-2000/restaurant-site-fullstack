const jwt =require("jsonwebtoken");
module.exports = (req,res,next)=>{
    try{
        console.log("reeeeeeeee",req.headers);
        const token = req.headers.authorization.split(" ")[1];
        console.log("tok======",token);
        const decodedtoken = jwt.verify(token,"sercret_key");
        req.userData = {loginId: decodedtoken.loginId,username: decodedtoken.username};
        console.log("reqq",req.userData);
        next();
    }
    catch(error){
        res.status(401).json({message:"Authentication failed!"});

    }
};
