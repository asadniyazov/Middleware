import mongoose from "mongoose";
const kittySchema = new mongoose.Schema({
    email:{ type: String, required: true, unique: true },
    pasword:{ type: String, required: true}
});
export const Kitten = mongoose.model('Kitten', kittySchema)
