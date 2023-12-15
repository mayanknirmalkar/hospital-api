import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true, "please provide a name"],
        trim:true,
    },
    username:{
        type:String,
        unique:[true, "username should be unique"],
        required:[true, "please provide a username"],
        trim:true,
    },
    hashpassword:{
        type:String,
        required:[true, "please provide a password"],
        select:false,
        minlength:[6, "please provide a password of length atleast six"]
    },
    
},{timestamps:true})

const Doctor = mongoose.model('Doctor', doctorSchema);

export default Doctor;