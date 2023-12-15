import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const uri = process.env.URI;

const connectdb = () =>{
    
    const connect = mongoose.connect(uri)

    console.log("Mongodb connected")
}

export default connectdb;