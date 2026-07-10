const { log } = require("console");
const mongoose=require("mongoose");

const connectDB=()=>{
    mongoose.connect("mongodb+srv://pranaywawalkar2005_db_user:<Pranay1918>@cluster0.yygyjhv.mongodb.net/hotel?appName=Cluster0").then(() => {
        console.log("conneted");
        
    
        
    }).catch((err) => {
        console.log(err);
        
        
    });
}