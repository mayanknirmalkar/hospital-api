import Patient from "../models/patient.js"

const getPatientReports = async(req,res,next) =>{

    const _id = req.params.id;

    try {
       const patient =  await Patient.findById(_id).populate({path:'report', options:{sort:{_id:1}}});

       if(!patient){
        return res.status(400).json({success:false, message:"patient not found"})
       }

       const reports = patient.report;

       return res.status(200).json({success:true, reports, message:"all reports listed"})

    } catch (error) {
        next(error)
    }
}

export default getPatientReports