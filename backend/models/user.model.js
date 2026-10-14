import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userID:{
        type: String,
    },
    userName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    pwd:{
        type: String,
        required: true,
    },
    imgUrl: String,
    userRole:{
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const user = mongoose.model("User", userSchema);

export default user;