import Doctor from "../models/doctor.js"
import bcrypt from "bcrypt";

const doctorRegister = async (req,res,next) => {

    const {name, username, password} = req.body;


    try {
        const salt = await bcrypt.genSalt();

        const hashpassword = await bcrypt.hash(password, salt);

       const doctor =  await Doctor.create({name, username, hashpassword});

       return res.status(201).json({success:true, doctor, message:"registration successful"})
    } catch (error) {
        next(error)
    }

}

export default doctorRegister