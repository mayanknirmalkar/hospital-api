import mongoose from "mongoose";

const patientSchema  = new mongoose.Schema({

    name : {
        type:String,
        required:[true, "please enter patient's name"],
        trim:true,
    },
    phone:{
        type:Number,
        required:[true, "please enter a phone number"],
        unique:true,
        trim:true,
    },
    report:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Report'
    }]
})

const Patient = mongoose.model('Patient', patientSchema);

export default Patient;