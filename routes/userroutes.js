const express = require("express")
const userRouter = express.Router()
const{signIn, signUp, updateuser, deletuser}=require("../controllers/userController")
const {registerRules, validator, loginRules} = require("../middelwares/validators")
//const isAuth = require("../middelwares/isAuth")

userRouter.post("/signup", registerRules, validator,signUp)

userRouter.post("/signin", loginRules,validator,signIn)

userRouter.put("/edituser/:id", updateuser)

userRouter.delete("/deleteuser/:id", deletuser)

module.exports=userRouter