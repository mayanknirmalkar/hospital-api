import Doctor from "../models/doctor.js"
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config()

const login = async (req,res,next) =>{


    const {JWT_SECRET, JWT_EXPIRE} = process.env;
    const {username, password} = req.body;

    if(!(username && password)){
        return res.status(400).json({success:false, message:"please enter both username and password"})
    }

    try {
        const doctor = await Doctor.findOne({username}).select("+hashpassword")

        if(!username){
            return res.status(400).json({success:false, message:"please enter correct username"})
        }

        
        const response = await bcrypt.compare(password, doctor.hashpassword);

        if(!response){
            return res.status(400).json({success:false, message:"please enter correct password"})
        }

       const token =  jwt.sign({doctor}, JWT_SECRET , {expiresIn:JWT_EXPIRE});


        return res.status(200).json({success:true, token, doctor, message:"welcome to hospital api"})
        
    } catch (error) {
        next(error)
    }

}

export default login