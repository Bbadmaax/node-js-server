import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  return jwt.sign(
    { id: user_id, name: user.name }, // payload wuxuu noqon kara wax walba aad ku aqoonsan karto userid gaaga
    process.env.JWT_SECRET, // secret key
    { expiresIn: "7d" } // option
  );
};
