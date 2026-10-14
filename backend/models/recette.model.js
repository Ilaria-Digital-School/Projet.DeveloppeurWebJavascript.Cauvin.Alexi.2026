import mongoose from "mongoose";

const recetteSchema = new mongoose.Schema({
    
    userId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "UserID", 
    },
    userName:{
        type: mongoose.Schema.Types.userName,
        ref: "Username"
    },
    nom_recette: {
        type: String,
        required: true,
    },
    imgUrl: String,
    time: {
        type: Number,
        required: true

    },
    Kcal:{
        type: Number,
        required: true
    },
    difficulty:{
        type: [String],
        required: true
    },
    people:{
        type: Number,
        required: true,
    },
    instructions: {
        type: String,
        required: true,
    },
    tag:{
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const recette = mongoose.model("Recette", recetteSchema);

export default recette;