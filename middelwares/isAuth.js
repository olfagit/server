const jwt = require("jsonwebtoken")
require("dotenv").config()

const isAuth = async(req,res,next)=>{
const token = req.heders["authorization"]
try {
    if(!token){
        return res.status(401).sned({errors:[{msg:"you are not authorized"}]})
    }
    const decoded = jwt.verify(token, process.env.SecretOrKey)
    req.user={
        id:decoded.id
    }
    next()
} catch (error) {
    return res.status(401).sned({errors:[{msg:"you are not authorized"}]})
}
}

module.exports = isAuth