import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";


const connectDB=async()=>{
    try{
        console.log("mongoDB url:",`${process.env.MONGODB_URI}/${DB_NAME}`)
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB host: ${connectionInstance.connection.host}`);
    }catch(error){
        console.log("MongoDB connection error",error);
        process.exit(1);
    }
}

export default connectDB;