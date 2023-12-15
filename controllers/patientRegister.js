import Patient from "../models/patient.js";

const patientRegister = async (req,res,next) =>{

    try {
        const {phone, name} = req.body;

        const patientExists = await Patient.findOne({phone});

        if(patientExists){
            return res.status(200).json({success:false, patientExists, message:"patient already exists"})
        }

        const patient =  await Patient.create({name, phone});

        return res.status(201).json({success:true, patient, message:"patient has been registered"});
    } catch (error) {
        next(error)
    }
    
}

export default patientRegister