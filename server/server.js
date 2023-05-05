const express = require('express')
const server = express()
const bodyparse = require("body-parser")
const loginRouter = require('./src/routes/loginRouter')
const registerRouter = require('./src/routes/registerrouter')
const profileRouter = require('./src/routes/profileRouter')
const addfoodRouter = require('./src/routes/addfoodRouter')
const cartRouter = require('./src/routes/cartRouter')
const wishRouter = require('./src/routes/wishRouter')
server.use(express.urlencoded({ extended: true }))
server.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});
server.use(bodyparse.json())


server.use(express.static('./public'))
server.use('/login', loginRouter)
server.use('/cart',cartRouter)

server.use('/register', registerRouter)
server.use('/profile',profileRouter)
server.use('/addfood',addfoodRouter)
server.use('/wishlist',wishRouter)



server.listen(8000, () => { console.log("server started at port http://localhost:8000") })