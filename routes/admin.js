
import express from "express"

import { protect } from "../middlewares/Authmiddleware.js";
import { Authorize } from "../middlewares/Authorize..js";

const router = express.Router()

router.get("/dashboard",protect, Authorize("admin"), (req,res)=> {
    res.json({message : "welcome to the admon dashboard"})
})

export default router;