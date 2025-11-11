 import jwt from "jsonwebtoken";
import User from "../models/User.js"

export const protect = async (req,res, next)=> {

   // 1= hel token hederka 
     const token = req.headers.authorization?.split(" ")[1];
      console.log("token info", token)
    
      if(!token) {
        res.status(401).json({message :  "notoken provide"})
      }

     try{
      
        // 2= verify gare token
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        console.log("decoded", decode) // decode waxa ku jira = payload + iat + exp

//  ka raadso userka datebaseka decodedka 
        const user = await User.findById(decode.id).select('-password')  // ka reeb passawrrdka 
        
      //   4 = ku dar user-ka `req` objectka
      req.user = user
      next()

        
     }catch(err){
        res.status(401).json({message : "invalid or expire token"})
     }
}