const mongoose=require("mongoose");


const hostingSchema=new mongoose.Schema({

    name:{  
        type:String,  
        required:[true,"Please Enter Client Name"],
        trim:true  
    },
    email:{ 
        type:String,
        required:[true,"Please Enter Client Email"],
        trim:true
    },
    mobile:{
        type:Number,
        required:[true,"Please Enter Mobile Number"],
        maxlength:[10,"price can not exceed 10 characters"]
    },
    address:{
        type:String,
        required:[true,"Please Enter Client Address"],
        trim:true
    },
    
    domain:{
        type:String,
        required:[true,"Please Enter Domaim Name"],
        trim:true
    }, 
    states:{
        type:String,   
        default: "inactive",
        trim:true
    },
    Package:{
        type:Number,
        trim:true
    },
    username:{
        type:String,
       // required:[true,"Please Enter Domaim Name"],
        trim:true
    },
    password:{
        type:String,
       // required:[true,"Please Enter Domaim Name"],
        trim:true
    },
    database:{
        type:String,
       // required:[true,"Please Enter Domaim Name"],
        trim:true
    },
    
    createdAt:{ 
         type:Date,
         default:Date.now
    }
})

module.exports=mongoose.model("Hosting",hostingSchema);