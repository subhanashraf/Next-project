import mongoose from "mongoose";
require("dotenv").config(); // Load environment variables from a .env file into process.env
export const connect = async () => {
    try {
        if (mongoose.connection.readyState === 1) {
            console.log("DB already connected");
            return;
            
        } else {
            await mongoose.connect(process.env.MONGO_URI!,);
            console.log("Connected to MongoDB");
        }

    } catch (error) {
        console.log("Error connecting to MongoDB", error);
        
    }
};