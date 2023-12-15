import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({

    createdBy: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctor',
        required:[true, "please enter a doctor"],
    },
    patientId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Patient',
        required:[true, "please enter a patient"],
    },
    status:{
        type:String,
        enum:["Negative", "Travelled-Quarantine", "Symptoms-Quarantine",
            "Positive-Admit"],
        required:[true, "please enter status"]
    },
    date:{
        type:Date,
        default: () => new Date().setHours(0,0,0,0)
    },
},{timestamps:true})


const Report = mongoose.model('Report', reportSchema);

export default Report;