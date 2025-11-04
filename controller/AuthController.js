import User from "../models/User.js";
import { generateToken } from "../utils/generateToken.js";
import bcrypt from "bcrypt"

// register new user token
export const register = async (req, res, next) => {
  let  { name, email, password, roles } = req.body;

  try {
   // email lowercase

      email = email.toLowerCase();

       //Hubi in user hore u jiro
    const exists = await User.findOne({ email }); 
    if (exists)
      return res.status(400).json({ message: "email already in use" });

    // create user 
    const user = await User.create({ name, email, password,roles });

    // generate token
    const token = generateToken(user._id)

    res.status(201).json({message : "user register successfully ✅", token})
  } catch (err) {
    next(err) // waxan u gudbinay global error hadleka wuxuu aqbala ani error global erroka sxb
  }
};

export const login = async (req,res,next)=> {
  let {email, password} = req.body;
  try{

      // 1. Hubi in email iyo password la soo diray
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required ❌" });
    }


     // 2. Raadi userka database-ka
const user = await User.findOne({email: email.toLowerCase()})
  if(!user) {
    return res.status(404).json({message : "invalid email or password"})
  }

  // 3. Is bar passwordka userka iyo midka database-ka ku jira
   const isMatch = await  bcrypt.compare(password, user.password)
   if(!isMatch) {
    return res.status(400).json({message: "inavalid email or password"})
   }

   //4. making token
   const token = generateToken(user._id)
   
//5. jawaabta udir 
res.status(201).json({message : "success loggin", token})

  }catch(err){
    next(err)
  }
}