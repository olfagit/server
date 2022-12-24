 const cv = require("../models/cv")

 exports.Addcv = async(req,res)=>{
    try {
        const newcv = await cv(req.body)
        await newcv.save()
        res.status(200).send({msg:"cv saved successfully" , newcv})
    } catch (error) {
        res.status(500).send("cv not saved")
    }
}

exports.getcv = async(req,res)=>{
    try {
        const onecv = await cv.findById(req.params.id)
        res.status(200).send({msg:"this is cv" , onecv})
    } catch (error) {
        res.status(500).send("cv not found")
    }
}

exports.updatecv = async(req,res)=>{
    try {
        const editcv= await cv.findByIdAndUpdate(req.params.id, {$set:{...req.body}} , {new:true})
        res.status(200).send({msg:"cv updated successfully" , editcv})
    } catch (error) {
       res.status(500).send("cv not updated") 
    }
}

exports.deletcv = async(req,res)=>{
    try {
        await cv.findByIdAndDelete(req.paramq.id)
        res.status(200).send({msg:"cv deleted successfully"})
    } catch (error) {
        res.status(500).send("cv not deleted")
    }
}