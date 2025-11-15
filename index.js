import express from "express";
import mongoose from "mongoose"
import dotenv from "dotenv"
import morgan from "morgan";
import helmet from "helmet";
import { limitter } from "./middlewares/rateLimiter.js";

import userRoutes from "./routes/userRoutes.js"
import AuthRoutes from "./routes/AuthRoutes.js"
import adminRoutes from "./routes/admin.js"
import uploadRoutes from "./routes/uploadRoutes.js"
import TaskRoutes from "./routes/TaskRoutes.js"

// swager ui express 
import swaggerUi from "swagger-ui-express"
import { swaggerSpec } from "./utils/swagger.js";


import { logger } from "./middlewares/logger.js";
import { notFound } from "./middlewares/notFound.js";
import { globalHandler } from "./middlewares/globalHandler.js";


//load env files
dotenv.config();

const app = express()
const PORT = process.env.PORT || 5000

// isticmaal middleware
app.use(helmet())  
app.use(limitter) // timelimitter 

// middleware
app.use(express.json())
app.use(morgan("tiny"))
// custom middleware 
app.use(logger)

//swagger
app.use('/docs',swaggerUi.serve, swaggerUi.setup(swaggerSpec))

//routes
app.use("/users", userRoutes)
app.use("/Auth", AuthRoutes)
app.use("/admin", adminRoutes)
app.use("/upload", uploadRoutes)

app.use('/tasks', TaskRoutes)

// test express browser
app.get("/", (req,res)=> {
    res.send("hello express from badmaax")
})

//last middle 
app.use(notFound)
//global handler middleware last middleware
app.use(globalHandler)

// connected mongodb_uri in mongoose 
mongoose.connect(process.env.NODE_ENV === "development" ? process.env.MONGO_URI_DEV : process.env.MONGO_URI_PRO)
.then(()=> console.log("connected ✅"))
.catch((err)=> console.log("not connected ❌", err))


app.listen(PORT, ()=> {
    console.log(`yourecode is running http://localhost:${PORT}`)
})



 