import mongoose from "mongoose";
 
const connectDb = async()=>{
    try {
        const connectionIntance = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MONGODB connected succesfuly to host: ${connectionIntance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED: ", error);
       // exit(1);
    }
}

export default connectDb;