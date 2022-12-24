const express = require("express")
const cvRouter = express.Router()
const{Addcv , getcv, updatecv, deletcv} = require("../controllers/cvControllers")

cvRouter.post("/Addcv" , Addcv)

cvRouter.get("/getcv/:id" , getcv)

cvRouter.put("/editcv/:id" , updatecv)

cvRouter.delete("/deletcv/:id" , deletcv)

module.exports = cvRouter