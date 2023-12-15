import express from "express";
import dotenv from "dotenv";
import connectdb from "./helpers/connectDB.js"
import router from "./routers/index.js"
import customErrorHandler from "./helpers/customErrorHandler.js";
dotenv.config();

const server = express();

server.use(express.json());

server.use(express.urlencoded({extended:true}));

connectdb();

server.use("/", router)

server.use(customErrorHandler)

const PORT = process.env.PORT || 5000
server.listen(PORT, ()=>{
    console.log(`server listening on port ${PORT}`)
})