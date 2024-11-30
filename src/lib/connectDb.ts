import mongoose from "mongoose";

let isConnected = false;

export const connectDb = async () => {
  if (isConnected) {
    console.log(isConnected)
    console.log('Database is already connected');
    return;
  }
  
  try {
    const db = await mongoose.connect(process.env.uri || "");
    
    isConnected = db.connections[0].readyState === 1;
    
    console.log('Connected to database');
  } catch (err) {
    console.log('Error connecting to database:', err);
    throw err; // Propagate the error
  }
};
