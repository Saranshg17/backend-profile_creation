import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";


const connectDB=async()=>{
    try{
        console.log(process.env.MONGODB_URI)
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        // const connectionInstance1 = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME1}`)
        console.log(`\n MongoDB connected !! DB host: ${connectionInstance.connection.host}`);
    }catch(error){
        console.log("MongoDB connection error",error);
        process.exit(1);
    }
}

export default connectDB;