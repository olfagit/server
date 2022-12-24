const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
require("dotenv").config()
const User = require("../models/User")

exports.signUp=async(req,res)=>{
    let {name,email,password}=req.body;
    try {
      const foundUser = await User.findOne({email})
      if(foundUser){
        return res.status(400).send({errors:[{msg:"user already exist"}]})
      }
      let user = new User ({name,email,password})  
      const salt = 10
      user.password = await bcrypt.hash(password,salt)
      if (password===confirmpassword){
        await user.save()
     const payload={id:user._id}
     const token=jwt.sign(payload,process.env.SecretOrKey,{expiresIn:'3d'})
     res.status(200).send({msg:"user added with success",user,token})
    } 
    } catch (error) {
      res.status(500).send({msg:"server error"})
    }
}

exports.signIn= async(req,res)=>{
    const {email, password} = req.body
     try {
       const user = await User.findOne({email})
       if(!user){
         return res.status(400).send({errors:[{msg:"bad request"}]})
       }
       const isMatch = bcrypt.compare(password,user.password)
       if(!isMatch){
         return res.status(400).send({errors:[{msg:"bad request"}]})
       }
       const payload={id:user._id}
       const token=jwt.sign(payload,process.env.SecretOrKey,{expiresIn:'3d'})
        res.status(200).send({msg:"login with success",user,token})
     } catch (error) {
       res.status(500).send({errors:[{msg: "could not login"}]})
     }
   }

exports.updateuser= async(req,res)=>{
  try {
    const user =await user.findByIdAndUpdate(req.user.id , {$set:{...req.body}} , {new:true})
    res.status(200).send({msg:"user updated with success",user})
  } catch (error) {
    res.status(500).send("user not updated")
  }
}

exports.deletuser=async(req,res)=>{
  try {
    await User.findByIdAndDelete(req.params.id)
    res.status(200).send({msg:"user deleted"})
  } catch (error) {
   res.status(500).send("user not deleted") 
  }
}
