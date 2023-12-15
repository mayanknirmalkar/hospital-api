import Patient from "../models/patient.js"
import Report from "../models/report.js";

const patientReport = async(req,res,next) =>{

    const _id = req.params.id;

    const {status} = req.body;

    const createdBy = req.doctor._id;

    try {

        const patient = await Patient.findById(_id);

        if(!patient){
            return res.status(400).json({success:false, message:"patient not found"})
        }
        const patientId = patient._id
        const report = await Report.create({createdBy, patientId, status});

        const reports = [...patient.report, report]

        patient.report = reports;

        patient.save();

        return res.status(201).json({success:true, report, message:"report has been created"})

       
    } catch (error) {
        next(error)
    }
}

export default patientReport