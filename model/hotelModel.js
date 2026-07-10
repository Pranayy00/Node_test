const { Timestamp } = require("bson")
const mongoose=require("mongoose")

const hotelSchema=mongoose.Schema({
    RoomNumber:{
        type:Number,
        unique:true,
        required:[true,"room number required"]
    },
    RoomType:{
        type:String,
        enum:["AC","NON-AC"],
        default:NON-AC,
        required:[true,"room type required"]

    },
    PPnight:{
        type:Number,
        enum:[25000,20000],
        required:true

    },
    capacity:{
        type:String,
        max:5,
        min:2

    }


},{Timestamps:true})



//model
const hotelModel=mongoose.model("rooms",hotelSchema);

//exports
module.exports=hotelModel