import express from "express";
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRoutes from "./routes/userRoutes.js"
import { logger } from "./middlewares/logger.js";
import { notFound } from "./middlewares/notFound.js";
import { globalHandler } from "./middlewares/globalHandler.js";
//load env files
dotenv.config();

const app = express()
const PORT = process.env.PORT || 5000

// middleware
app.use(express.json())
// custom middleware 
app.use(logger)
//routes
app.use("/users", userRoutes)

// test express browser
app.get("/", (req,res)=> {
    res.send("hello express from badmaax")
})

//last middle 
app.use(notFound)
//global handler middleware last middleware
app.use(globalHandler)

// connected mongodb_uri in mongoose 
mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("connected ✅"))
.catch((err)=> console.log("not connected ❌", err))


app.listen(PORT, ()=> {
    console.log(`yourecode is running http://localhost:${PORT}`)
})

