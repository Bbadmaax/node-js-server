import jwt from "jsonwebtoken"

export const generateToken = (userId)=> {
   return jwt.sign(

    {id : userId},    // payload wuxuu noqon kara wax walba aad ku aqoonsan karto userid gaaga
     process.env.JWT_SECRET,// secret key
    {expiresIn: "7d"} // option

   )
} 