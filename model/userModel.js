const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    Fname:{
        type:string,
        required:[true,"name required"]


    },
    Email:{
        type:String,
        unique:true,
        required:[true,"email required"]
    },
    pass:{
        type:String,
        required:[true,"password is required"]
    },
    CheckInout:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"rooms"

    }
 })

module.exports=userModel

//model
const userModel=mongoose.model("users",userSchema);