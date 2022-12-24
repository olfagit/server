const mongoose = require("mongoose")

const cvSchema = new mongoose.Schema({
    name:{
        type:String, 
        required:true
    },
    email:{
        type:String,
        required:true, 
        unique:true
    },
    telephone:{
        type:Number
    },
    diplome:{
        type:String
    },
    parcours:{
        type:String
    },
    profileImg:{
        type:String
    },
    langues:{
        type:String
    },
    competences:{
        type:String
    }
})

module.exports=mongoose.model("cv",cvSchema)