import mongoose from "mongoose";

export const connectDb = async ()=>{
    try {
        await mongoose.connect(process.env.uri || "")
        console.log('Connected to database') 
    } catch (err) {
        console.log(err)
        return "Error connecting to database"
    }
    
}
