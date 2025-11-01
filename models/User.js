import mongoose from "mongoose";
import bcrypt from "bcrypt"

// defina scheme
const userSchema = new mongoose.Schema({
    name : String,
    email : {type: String, unique: true},
    password : String
})

//hashing before saving db
userSchema.pre('save', async function (next) {
      // Haddii password aan la bedelin, skip hashing
   if(!this.isModified('password')) return next()

    const salt = await bcrypt.genSalt(10)
    this.password = await  bcrypt.hash(this.password, salt)
    next()
})

// method to comapre passawrd and hashing
userSchema.methods.compare = function(inputPassword) {
    return bcrypt.compare(inputPassword, this.password)
}
// define model
const User = mongoose.model("User", userSchema);

export default User

