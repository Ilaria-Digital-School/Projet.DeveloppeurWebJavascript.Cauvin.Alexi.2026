import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/Dishub");
        console.log("MongoDB connected");
    } catch (error) {
        console.error("Error MongoDb", error)
        process.exit(1);
    }  
};

export default connectDB;