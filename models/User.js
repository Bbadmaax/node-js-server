import mongoose from "mongoose";

// defina scheme
const userSchema = new mongoose.Schema({
    name : String,
    email : String
})

// define model
const User = mongoose.model("User", userSchema);

export default User

