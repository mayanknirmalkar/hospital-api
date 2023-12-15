import jwt from "jsonwebtoken"
import dotenv from "dotenv";
import Doctor from "../models/doctor.js"
dotenv.config();

const getAcessToRoute = async (req,res,next) =>{

    const {JWT_SECRET} = process.env;

    if(!(req.headers.authorization && req.headers.authorization.startsWith("Bearer"))){
        return res.status(401).json({success:false, message:"you are not authorized, please login"})
    }

    const token = req.headers.authorization.split(' ')[1]

    const payload = jwt.verify(token, JWT_SECRET);

    const doctor = await Doctor.findById(payload.doctor._id);


    if(!doctor){
        return res.status(401).json({success:false, message:"you are not authorized"})
    }

    req.doctor = doctor;

    next();
}

export default getAcessToRoute