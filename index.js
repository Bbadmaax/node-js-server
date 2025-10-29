import express from "express";
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRoutes from "./routes/userRoutes.js"
//load env files
dotenv.config();

const app = express()
const PORT = process.env.PORT || 5000

// middleware
app.use(express.json())

//routes
app.use("/users", userRoutes)

// test express browser
app.get("/", (req,res)=> {
    res.send("hello express from badmaax")
})

// connected mongodb_uri in mongoose 
mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("connected ✅"))
.catch((err)=> console.log("not connected ❌", err))


app.listen(PORT, ()=> {
    console.log(`yourecode is running http://localhost:${PORT}`)
})